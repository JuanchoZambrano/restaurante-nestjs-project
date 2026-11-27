import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';
import { CreateCategoriaDto } from './dto/create.categoria.dto.js';
import { UpdateCategoriaDto } from './dto/update.categoria.dto.js';

@Injectable()
export class CategoriasService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.categoria.findMany();
  }

  async findOne(id: number) {
    const idNumber = Number(id);
    const category = await this.prisma.categoria.findUnique({
      where: { id: idNumber },
    });

    if (!category) {
      throw new NotFoundException(`No hay un categoria con ID: ${idNumber}`);
    }

    return category;
  }

  async create(dto: CreateCategoriaDto) {
    return await this.prisma.categoria.create({
      data: {
        nombre: dto.nombre,
        descripcion: dto.descripcion ?? null,
      },
      select: {
        id: true,
        nombre: true,
        descripcion: true,
      },
    });
  }

  async update(id: number, dto: UpdateCategoriaDto) {
    const idNumber = Number(id);
    try {
      const category = await this.prisma.categoria.update({
        where: { id: idNumber },
        data: {
          ...(dto.nombre !== undefined && { nombre: dto.nombre }),
          ...(dto.descripcion !== undefined && {
            descripcion: dto.descripcion,
          }),
        },
        select: {
          id: true,
          nombre: true,
          descripcion: true,
        },
      });

      return category;
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

  async remove(id: number) {
    const idNumber = Number(id);
    try {
      return await this.prisma.categoria.delete({
        where: { id: idNumber },
      });
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
