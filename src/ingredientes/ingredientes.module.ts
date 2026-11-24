import { Module } from '@nestjs/common';

import { IngredientesController } from './ingredientes.controller.js';
import { IngredientesService } from './ingredientes.service.js';

@Module({
  controllers: [IngredientesController],
  providers: [IngredientesService],
})
export class IngredientesModule {}