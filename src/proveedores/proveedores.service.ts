import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateProveedorDto } from './dto/create-proveedore.dto.js';
import { UpdateProveedorDto } from './dto/update-proveedore.dto.js';

@Injectable()
export class ProveedoresService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProveedorDto: CreateProveedorDto) {
    return this.prisma.proveedor.create({
      data: createProveedorDto,
    });
  }

  findAll() {
    return this.prisma.proveedor.findMany({
      include: {
        ingredientes: {
          include: {
            ingrediente: true,
          },
        },
      },
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const proveedor = await this.prisma.proveedor.findUnique({
      where: { id },
      include: {
        ingredientes: {
          include: {
            ingrediente: true,
          },
        },
      },
    });

    if (!proveedor) {
      throw new NotFoundException(`Proveedor con id ${id} no encontrado`);
    }

    return proveedor;
  }

  async update(id: number, updateProveedorDto: UpdateProveedorDto) {
    await this.findOne(id);

    return this.prisma.proveedor.update({
      where: { id },
      data: updateProveedorDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.proveedor.delete({
      where: { id },
    });
  }
}