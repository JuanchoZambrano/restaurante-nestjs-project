import {
  IsString,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class CreateIngredienteDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNumber()
  stock: number;

  @IsNumber()
  stockActual: number;

  @IsString()
  @IsNotEmpty()
  unidadMedida: string;
}