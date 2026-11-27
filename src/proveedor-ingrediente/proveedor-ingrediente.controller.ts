import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ProveedorIngredienteService } from './proveedor-ingrediente.service.js';
import { CreateProveedorIngredienteDto } from './dto/create-proveedor-ingrediente.dto.js';
import { UpdateProveedorIngredienteDto } from './dto/update-proveedor-ingrediente.dto.js';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { Roles } from '../auth/decorators/roles.decorator.js';

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('GERENTE')
@Controller('proveedor-ingrediente')
export class ProveedorIngredienteController {
  constructor(
    private readonly proveedorIngredienteService: ProveedorIngredienteService,
  ) {}

  @Post()
  create(@Body() dto: CreateProveedorIngredienteDto) {
    return this.proveedorIngredienteService.create(dto);
  }

  @Get()
  findAll() {
    return this.proveedorIngredienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.proveedorIngredienteService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateProveedorIngredienteDto,
  ) {
    return this.proveedorIngredienteService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.proveedorIngredienteService.remove(id);
  }
}
