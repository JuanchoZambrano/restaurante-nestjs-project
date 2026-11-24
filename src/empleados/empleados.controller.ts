import { Body, Controller, Get, Param, Post, Put, Patch } from '@nestjs/common';
import { EmpleadosService } from './empleados.service.js';

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
  create(@Body() body: any) {
    return this.empleadosService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.empleadosService.update(id, body);
  }

  @Patch(':id')
  setinactive(@Param('id') id: number) {
    return this.empleadosService.setInactive(id);
  }
}
