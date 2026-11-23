import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class CategoriasService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.categoria.findMany();
  }
}
