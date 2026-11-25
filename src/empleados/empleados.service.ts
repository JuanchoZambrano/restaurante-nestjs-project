import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';
import { CreateEmpleadoDto } from './dto/create.empleado.dto.js';
import { UpdateEmpleadoDto } from './dto/update.empleado.dto.js';

@Injectable()
export class EmpleadosService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.empleado.findMany({
      orderBy: { id: 'asc' },
      where: {
        status: 'ACTIVE',
      },
    });
  }

  async getInactives() {
    return await this.prisma.empleado.findMany({
      where: {
        status: 'INACTIVE',
      },
    });
  }

  async findOne(id: number) {
    const idNumber = Number(id);
    const empleado = await this.prisma.empleado.findUnique({
      where: { id: idNumber, status: 'ACTIVE' },
    });

    if (!empleado) {
      throw new NotFoundException(`No hay un empleado con ID: ${idNumber}`);
    }

    return empleado;
  }

  async create(dto: CreateEmpleadoDto) {
    return await this.prisma.empleado.create({
      data: {
        nombre: dto.nombre,
        cargo: dto.cargo,
        telefono: dto.telefono ?? null,
      },
      select: {
        id: true,
        nombre: true,
        cargo: true,
        telefono: true,
      },
    });
  }

  async update(id: number, dto: UpdateEmpleadoDto) {
    const idNumber = Number(id);
    try {
      const empleado = await this.prisma.empleado.update({
        where: { id: idNumber },
        data: {
          ...(dto.nombre !== undefined && { nombre: dto.nombre }),
          ...(dto.cargo !== undefined && { nombre: dto.cargo }),
          ...(dto.telefono !== undefined && { nombre: dto.telefono }),
        },
        select: {
          id: true,
          nombre: true,
          cargo: true,
          telefono: true,
        },
      });
      return empleado;
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(
          `No existe un empleado con el ID: ${idNumber}`,
        );
      }
      throw error;
    }
  }

  async setInactive(id: number) {
    const idNumber = Number(id);
    try {
      const empleado = await this.prisma.empleado.update({
        where: { id: idNumber },
        data: {
          status: 'INACTIVE',
        },
      });
      return empleado;
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(
          `No existe una categoría con el ID: ${idNumber}`,
        );
      }
      throw error;
    }
  }
}
