import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';

import { IngredientesService } from './ingredientes.service.js';

@Controller('ingredientes')
export class IngredientesController {
  constructor(
    private readonly ingredientesService: IngredientesService,
  ) {}

  @Get()
  findAll() {
    return this.ingredientesService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.ingredientesService.findOne(id);
  }

  @Post()
  create(
    @Body() data: any,
  ) {
    return this.ingredientesService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ) {
    return this.ingredientesService.update(id, data);
  }

  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.ingredientesService.remove(id);
  }
}