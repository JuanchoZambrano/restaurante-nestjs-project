import { Module } from '@nestjs/common';

import { PlatoIngredientesController } from './platoIngredientes.controller.js';
import { PlatoIngredientesService } from './platoIngredientes.service.js';

@Module({
  controllers: [PlatoIngredientesController],
  providers: [PlatoIngredientesService],
})
export class PlatoIngredientesModule {}