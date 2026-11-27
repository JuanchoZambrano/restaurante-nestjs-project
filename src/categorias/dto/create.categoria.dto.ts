import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCategoriaDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre de la categoria es obligatorio.' })
  @MaxLength(100, {
    message:
      'El nombre de la categoria no puede superar los $constraint1 caracteres',
  })
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;
}
