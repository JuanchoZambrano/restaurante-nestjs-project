import { Body, Controller, Get, Param, Post, Put, Patch } from '@nestjs/common';
import { EmpleadosService } from './empleados.service.js';
import { CreateEmpleadoDto } from './dto/create.empleado.dto.js';
import { UpdateEmpleadoDto } from './dto/update.empleado.dto.js';
import { UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js'
import { RolesGuard } from '../auth/guards/roles.guard.js'
import { Roles } from '../auth/decorators/roles.decorator.js'

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('GERENTE')
@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) {}

  @Get()
  findAll() {
    return this.empleadosService.findAll();
  }

  @Get('inactives')
  getInactive() {
    return this.empleadosService.getInactives();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.empleadosService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateEmpleadoDto) {
    return this.empleadosService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateEmpleadoDto) {
    return this.empleadosService.update(id, dto);
  }

  @Patch(':id')
  setinactive(@Param('id') id: number) {
    return this.empleadosService.setInactive(id);
  }
}
