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
import {
  CreateIngredienteDto
} from './dto/create-ingrediente.dto.js';

import {
  UpdateIngredienteDto
} from './dto/update-ingrediente.dto.js';
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
  @Body()
  dto: CreateIngredienteDto,
) {
  return this.ingredientesService.create(dto);
}

  @Patch(':id')
update(
  @Param('id', ParseIntPipe)
  id: number,

  @Body()
  dto: UpdateIngredienteDto,
) {
  return this.ingredientesService.update(
    id,
    dto,
  );
}

  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.ingredientesService.remove(id);
  }
}