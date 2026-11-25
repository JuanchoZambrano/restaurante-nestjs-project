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
import { CreateDetallePedidoDto }
from './dto/create-detallePedido.dto.js';

import { UpdateDetallePedidoDto }
from './dto/update-detallePedido.dto.js';
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
  @Body()
  dto: CreateDetallePedidoDto,
) {
  return this.detallePedidosService.create(dto);
}

  @Patch(':id')
update(
  @Param('id', ParseIntPipe)
  id: number,

  @Body()
  dto: UpdateDetallePedidoDto,
) {
  return this.detallePedidosService.update(id, dto);
}


  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.detallePedidosService.remove(id);
  }
}