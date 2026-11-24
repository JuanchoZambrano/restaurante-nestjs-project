import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateProveedorIngredienteDto } from './dto/create-proveedor-ingrediente.dto.js';
import { UpdateProveedorIngredienteDto } from './dto/update-proveedor-ingrediente.dto.js';

@Injectable()
export class ProveedorIngredienteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateProveedorIngredienteDto) {
    const [proveedor, ingrediente, existente] = await Promise.all([
      this.prisma.proveedor.findUnique({ where: { id: dto.proveedorId } }),
      this.prisma.ingrediente.findUnique({ where: { id: dto.ingredienteId } }),
      this.prisma.proveedorIngrediente.findUnique({
        where: {
          proveedorId_ingredienteId: {
            proveedorId: dto.proveedorId,
            ingredienteId: dto.ingredienteId,
          },
        },
      }),
    ]);

    if (!proveedor) {
      throw new NotFoundException(`Proveedor con id ${dto.proveedorId} no encontrado`);
    }
    if (!ingrediente) {
      throw new NotFoundException(`Ingrediente con id ${dto.ingredienteId} no encontrado`);
    }
    if (existente) {
      throw new ConflictException(
        'Este ingrediente ya está asociado al proveedor indicado',
      );
    }

    return this.prisma.proveedorIngrediente.create({
      data: dto,
      include: {
        proveedor: true,
        ingrediente: true,
      },
    });
  }

  findAll() {
    return this.prisma.proveedorIngrediente.findMany({
      include: {
        proveedor: true,
        ingrediente: true,
      },
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const registro = await this.prisma.proveedorIngrediente.findUnique({
      where: { id },
      include: {
        proveedor: true,
        ingrediente: true,
      },
    });

    if (!registro) {
      throw new NotFoundException(
        `Relación proveedor-ingrediente con id ${id} no encontrada`,
      );
    }

    return registro;
  }

  async update(id: number, dto: UpdateProveedorIngredienteDto) {
    const actual = await this.findOne(id);
    const proveedorId = dto.proveedorId ?? actual.proveedorId;
    const ingredienteId = dto.ingredienteId ?? actual.ingredienteId;

    const duplicado = await this.prisma.proveedorIngrediente.findUnique({
      where: {
        proveedorId_ingredienteId: { proveedorId, ingredienteId },
      },
    });

    if (duplicado && duplicado.id !== id) {
      throw new BadRequestException(
        'Ya existe otra relación con ese proveedor e ingrediente',
      );
    }

    return this.prisma.proveedorIngrediente.update({
      where: { id },
      data: dto,
      include: {
        proveedor: true,
        ingrediente: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.proveedorIngrediente.delete({
      where: { id },
    });
  }
}