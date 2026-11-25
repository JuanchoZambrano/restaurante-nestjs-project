import { PartialType } from '@nestjs/mapped-types';

import { CreatePlatoIngredienteDto }
from './create-platoIngrediente.dto.js';

export class UpdatePlatoIngredienteDto
extends PartialType(
  CreatePlatoIngredienteDto,
) {}