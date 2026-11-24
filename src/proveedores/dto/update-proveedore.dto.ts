import { PartialType } from '@nestjs/mapped-types';
import { CreateProveedorDto } from './create-proveedore.dto.js';

export class UpdateProveedorDto extends PartialType(CreateProveedorDto) {}