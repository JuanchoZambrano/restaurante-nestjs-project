import { Controller, Get } from '@nestjs/common';
import { EmpleadosService } from './empleados.service.js';

@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) {}

  @Get()
  findAll() {
    return this.empleadosService.findAll();
  }
}
