import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { CreatePlatoDto } from './dto/create-plato.dto.js';
import { UpdatePlatoDto } from './dto/update-plato.dto.js';
import { PlatosService } from './platos.service.js';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { Roles } from '../auth/decorators/roles.decorator.js';

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('GERENTE', 'MESERO')
@Controller('platos')
export class PlatosController {
  constructor(private readonly platosService: PlatosService) {}

  @Get()
  findAll() {
    return this.platosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.platosService.findOne(id);
  }

  @Post()
  create(
    @Body()
    dto: CreatePlatoDto,
  ) {
    return this.platosService.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe)
    id: number,

    @Body()
    dto: UpdatePlatoDto,
  ) {
    return this.platosService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.platosService.remove(id);
  }
}
