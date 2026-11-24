import {
  Controller,
  Get,
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
}