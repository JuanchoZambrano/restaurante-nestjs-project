import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class PlatoIngredientesService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  findAll() {
    return this.prisma.platoIngrediente.findMany({
      include: {
        plato: true,
        ingrediente: true,
      },
    });
  }
}