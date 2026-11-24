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
    @Body() data: any,
  ) {
    return this.platosService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ) {
    return this.platosService.update(id, data);
  }

  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.platosService.remove(id);
  }
}