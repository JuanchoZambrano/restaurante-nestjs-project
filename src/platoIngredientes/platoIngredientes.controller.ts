import {
  Controller,
  Get,
} from '@nestjs/common';

import { PlatoIngredientesService } from './platoIngredientes.service.js';

@Controller('plato-ingredientes')
export class PlatoIngredientesController {
  constructor(
    private readonly platoIngredientesService: PlatoIngredientesService,
  ) {}

  @Get()
  findAll() {
    return this.platoIngredientesService.findAll();
  }
}