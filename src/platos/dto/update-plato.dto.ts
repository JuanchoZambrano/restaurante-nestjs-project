import { PartialType } from '@nestjs/mapped-types';

import { CreatePlatoDto }
from './create-plato.dto.js';

export class UpdatePlatoDto
extends PartialType(
  CreatePlatoDto,
) {}