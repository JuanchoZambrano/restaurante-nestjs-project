import {
  IsNumber,
} from 'class-validator';

export class CreateDetallePedidoDto {

  @IsNumber()
  pedidoId: number;

  @IsNumber()
  platoId: number;

  @IsNumber()
  cantidad: number;

  @IsNumber()
  precioUnitario: number;
}