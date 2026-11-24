import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class IngredientesService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  findAll() {
    return this.prisma.ingrediente.findMany();
  }

  findOne(id: number) {
    return this.prisma.ingrediente.findUnique({
      where: { id },
    });
  }

  create(data: any) {
    return this.prisma.ingrediente.create({
      data,
    });
  }

  update(id: number, data: any) {
    return this.prisma.ingrediente.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.ingrediente.delete({
      where: { id },
    });
  }
}