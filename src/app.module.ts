import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { ClientesModule } from './clientes/clientes.module.js';
import { EmpleadosModule } from './empleados/empleados.module.js';
import { CategoriasModule } from './categorias/categorias.module.js';

@Module({
  imports: [PrismaModule, ClientesModule, EmpleadosModule, CategoriasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
