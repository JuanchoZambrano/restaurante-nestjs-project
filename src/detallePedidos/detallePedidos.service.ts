import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class DetallePedidosService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  findAll() {
    return this.prisma.detallePedido.findMany();
  }

  findOne(id: number) {
    return this.prisma.detallePedido.findUnique({
      where: { id },
    });
  }

  create(data: any) {
    return this.prisma.detallePedido.create({
      data,
    });
  }

  update(id: number, data: any) {
    return this.prisma.detallePedido.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.detallePedido.delete({
      where: { id },
    });
  }
}