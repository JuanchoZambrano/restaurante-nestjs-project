import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';

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

  async create(data: { nombre: string; correo: string; telefono: string }) {
    return await this.prisma.cliente.create({
      data,
      select: {
        nombre: true,
        correo: true,
      },
    });
  }

  async update(
    id: number,
    data: { nombre: string; correo: string; telefono: string },
  ) {
    const idNumber = Number(id);
    try {
      const cliente = await this.prisma.cliente.update({
        where: { id: idNumber },
        data,
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
