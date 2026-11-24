import { PartialType } from '@nestjs/mapped-types';
import { CreateProveedorIngredienteDto } from './create-proveedor-ingrediente.dto.js';

export class UpdateProveedorIngredienteDto extends PartialType(
  CreateProveedorIngredienteDto,
) {}