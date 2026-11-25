import { PartialType } from '@nestjs/mapped-types';

import { CreateDetallePedidoDto }
from './create-detallePedido.dto.js';

export class UpdateDetallePedidoDto
extends PartialType(
  CreateDetallePedidoDto,
) {}