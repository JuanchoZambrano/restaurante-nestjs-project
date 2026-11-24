import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreatePedidoDto } from './dto/create-pedido.dto.js';
import { UpdatePedidoDto } from './dto/update-pedido.dto.js';

@Injectable()
export class PedidosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreatePedidoDto) {
    const [cliente, empleado] = await Promise.all([
      this.prisma.cliente.findUnique({ where: { id: dto.clienteId } }),
      this.prisma.empleado.findUnique({ where: { id: dto.empleadoId } }),
    ]);

    if (!cliente) {
      throw new NotFoundException(`Cliente con id ${dto.clienteId} no encontrado`);
    }
    if (!empleado) {
      throw new NotFoundException(`Empleado con id ${dto.empleadoId} no encontrado`);
    }

    return this.prisma.pedido.create({
      data: {
        clienteId: dto.clienteId,
        empleadoId: dto.empleadoId,
        ...(dto.estado !== undefined && { estado: dto.estado }),
        ...(dto.total !== undefined && { total: dto.total }),
      },
      include: {
        cliente: true,
        empleado: true,
        detalles: {
          include: {
            plato: true,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.pedido.findMany({
      include: {
        cliente: true,
        empleado: true,
        detalles: {
          include: {
            plato: true,
          },
        },
      },
      orderBy: { id: 'desc' },
    });
  }

  async findOne(id: number) {
    const pedido = await this.prisma.pedido.findUnique({
      where: { id },
      include: {
        cliente: true,
        empleado: true,
        detalles: {
          include: {
            plato: true,
          },
        },
      },
    });

    if (!pedido) {
      throw new NotFoundException(`Pedido con id ${id} no encontrado`);
    }

    return pedido;
  }

  async update(id: number, dto: UpdatePedidoDto) {
    await this.findOne(id);

    if (dto.clienteId !== undefined) {
      const cliente = await this.prisma.cliente.findUnique({
        where: { id: dto.clienteId },
      });
      if (!cliente) {
        throw new NotFoundException(`Cliente con id ${dto.clienteId} no encontrado`);
      }
    }

    if (dto.empleadoId !== undefined) {
      const empleado = await this.prisma.empleado.findUnique({
        where: { id: dto.empleadoId },
      });
      if (!empleado) {
        throw new NotFoundException(`Empleado con id ${dto.empleadoId} no encontrado`);
      }
    }

    return this.prisma.pedido.update({
      where: { id },
      data: dto,
      include: {
        cliente: true,
        empleado: true,
        detalles: {
          include: {
            plato: true,
          },
        },
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.pedido.delete({
      where: { id },
    });
  }
}                                                                                                                       