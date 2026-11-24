import { Module } from '@nestjs/common';
import { ProveedorIngredienteService } from './proveedor-ingrediente.service.js';
import { ProveedorIngredienteController } from './proveedor-ingrediente.controller.js';

@Module({
  controllers: [ProveedorIngredienteController],
  providers: [ProveedorIngredienteService],
})
export class ProveedorIngredienteModule {}
