import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { ClientesModule } from './clientes/clientes.module.js';
import { EmpleadosModule } from './empleados/empleados.module.js';
import { CategoriasModule } from './categorias/categorias.module.js';
import { ProveedoresModule } from './proveedores/proveedores.module.js';
import { ProveedorIngredienteModule } from './proveedor-ingrediente/proveedor-ingrediente.module.js';
import { PedidosModule } from './pedidos/pedidos.module.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [PrismaModule, ClientesModule, EmpleadosModule, CategoriasModule, ProveedoresModule, ProveedorIngredienteModule, PedidosModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
