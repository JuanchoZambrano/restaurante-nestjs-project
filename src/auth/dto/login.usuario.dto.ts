import { IsString, IsNotEmpty, MaxLength, IsEmail } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'El correo no tiene un formato válido' })
  @MaxLength(120, {
    message: 'El correo no puede superar los $constraint1 caracteres',
  })
  correo!: string;

  @IsString()
  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  @MaxLength(255, {
    message: 'La contraseña no puede superar los $constraint1 caracteres',
  })
  password!: string;
}
