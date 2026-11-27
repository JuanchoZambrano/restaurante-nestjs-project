import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';
import { CreateClienteDto } from './dto/create.cliente.dto.js';
import { UpdateClienteDto } from './dto/update.cliente.dto.js';

@Injectable()
export class ClientesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.cliente.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const idNumber = Number(id);
    const client = await this.prisma.cliente.findUnique({
      where: { id: idNumber },
    });

    if (!client) {
      throw new NotFoundException(`No hay un cliente con ID: ${idNumber}`);
    }

    return client;
  }

  async create(dto: CreateClienteDto) {
    return await this.prisma.cliente.create({
      data: {
        nombre: dto.nombre,
        telefono: dto.telefono ?? null,
        correo: dto.correo ?? null,
      },
      select: {
        id: true,
        nombre: true,
        telefono: true,
        correo: true,
      },
    });
  }

  async update(id: number, dto: UpdateClienteDto) {
    const idNumber = Number(id);
    try {
      const cliente = await this.prisma.cliente.update({
        where: { id: idNumber },
        data: {
          ...(dto.nombre !== undefined && { nombre: dto.nombre }),
          ...(dto.telefono !== undefined && { telefono: dto.telefono }),
          ...(dto.correo !== undefined && { correo: dto.correo }),
        },
        select: {
          id: true,
          nombre: true,
          telefono: true,
          correo: true,
        },
      });
      return cliente;
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(
          `No existe un cliente con el ID: ${idNumber}`,
        );
      }
      throw error;
    }
  }

  async remove(id: number) {
    const idNumber = Number(id);
    try {
      return await this.prisma.cliente.delete({
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
