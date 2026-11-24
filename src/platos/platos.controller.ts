import {
  Controller,
  Get,
} from '@nestjs/common';

import { PlatosService } from './platos.service.js';

@Controller('platos')
export class PlatosController {
  constructor(
    private readonly platosService: PlatosService,
  ) {}

  @Get()
  findAll() {
    return this.platosService.findAll();
  }
}