import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  ParseIntPipe,
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

  @Post()
  create(
    @Body() data: any,
  ) {
    return this.platoIngredientesService.create(data);
  }

  @Delete(':platoId/:ingredienteId')
  remove(
    @Param('platoId', ParseIntPipe) platoId: number,
    @Param('ingredienteId', ParseIntPipe) ingredienteId: number,
  ) {
    return this.platoIngredientesService.remove(
      platoId,
      ingredienteId,
    );
  }
}