import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class PlatosService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  findAll() {
    return this.prisma.plato.findMany();
  }

  findOne(id: number) {
    return this.prisma.plato.findUnique({
      where: { id },
    });
  }

  create(data: any) {
    return this.prisma.plato.create({
      data,
    });
  }

  update(id: number, data: any) {
    return this.prisma.plato.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.plato.delete({
      where: { id },
    });
  }
}