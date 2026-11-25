import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class CreatePlatoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsNumber()
  precio: number;

  @IsBoolean()
  disponible: boolean;

  @IsNumber()
  categoriaId: number;
}