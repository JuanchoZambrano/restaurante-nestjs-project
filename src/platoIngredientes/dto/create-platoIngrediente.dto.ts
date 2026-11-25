import {
  IsNumber,
} from 'class-validator';

export class CreatePlatoIngredienteDto {

  @IsNumber()
  platoId: number;

  @IsNumber()
  ingredienteId: number;

  @IsNumber()
  cantidad: number;
}