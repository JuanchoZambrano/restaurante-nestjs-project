import { Controller, Get } from '@nestjs/common';
import { ClientesService } from './clientes.service.js';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Get()
  findAll() {
    return this.clientesService.findAll();
  }
}
