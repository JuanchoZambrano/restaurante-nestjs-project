import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  IsEmail,
} from 'class-validator';

export class CreateClienteDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @MaxLength(100, {
    message: 'El nombre no puede superar los $constraint1 caracteres',
  })
  nombre: string;

  @IsString()
  @IsOptional()
  @MaxLength(20, {
    message: 'El teléfono no puede superar los $constraint1 caracteres',
  })
  telefono: string;

  @IsOptional()
  @IsEmail({}, { message: 'El correo no tiene un formato válido' })
  @MaxLength(120, {
    message: 'El correo no puede superar los $constraint1 caracteres',
  })
  correo: string;
}
