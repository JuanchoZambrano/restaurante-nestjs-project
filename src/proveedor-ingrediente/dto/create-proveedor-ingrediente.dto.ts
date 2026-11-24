import { IsInt, Min } from 'class-validator';

export class CreateProveedorIngredienteDto {
  @IsInt()
  @Min(1)
  proveedorId: number;

  @IsInt()
  @Min(1)
  ingredienteId: number;
}