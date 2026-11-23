import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class EmpleadosService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.empleado.findMany();
  }
}
