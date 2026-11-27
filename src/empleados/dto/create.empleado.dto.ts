import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateEmpleadoDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @MaxLength(100, {
    message: 'El nombre no puede superar los $constraint1 caracteres',
  })
  nombre: string;

  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @MaxLength(100, {
    message: 'El nombre no puede superar los $constraint1 caracteres',
  })
  cargo: string;

  @IsString()
  @IsOptional()
  @MaxLength(20, {
    message: 'El teléfono no puede superar los $constraint1 caracteres',
  })
  telefono: string;
}
