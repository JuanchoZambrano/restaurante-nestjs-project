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
import { CreatePlatoDto }
from './dto/create-plato.dto.js';

import { UpdatePlatoDto }
from './dto/update-plato.dto.js';

import { PlatosService } from './platos.service.js';

@Controller('platos')
export class PlatosController {
  constructor(
    private readonly platosService: PlatosService,
  ) {}

  @Get()
  findAll() {
    return this.platosService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
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
  return this.platosService.update(
    id,
    dto,
  );
}

  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.platosService.remove(id);
  }
}