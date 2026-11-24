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

import { DetallePedidosService } from './detallePedidos.service.js';

@Controller('detalle-pedidos')
export class DetallePedidosController {
  constructor(
    private readonly detallePedidosService: DetallePedidosService,
  ) {}

  @Get()
  findAll() {
    return this.detallePedidosService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.detallePedidosService.findOne(id);
  }

  @Post()
  create(
    @Body() data: any,
  ) {
    return this.detallePedidosService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ) {
    return this.detallePedidosService.update(id, data);
  }

  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.detallePedidosService.remove(id);
  }
}