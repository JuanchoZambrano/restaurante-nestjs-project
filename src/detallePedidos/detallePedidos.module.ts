import { Module } from '@nestjs/common';

import { DetallePedidosController } from './detallePedidos.controller.js';
import { DetallePedidosService } from './detallePedidos.service.js';

@Module({
  controllers: [DetallePedidosController],
  providers: [DetallePedidosService],
})
export class DetallePedidosModule {}