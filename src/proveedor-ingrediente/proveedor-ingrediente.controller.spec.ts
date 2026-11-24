import { Test, TestingModule } from '@nestjs/testing';
import { ProveedorIngredienteController } from './proveedor-ingrediente.controller.js';
import { ProveedorIngredienteService } from './proveedor-ingrediente.service.js';

describe('ProveedorIngredienteController', () => {
  let controller: ProveedorIngredienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProveedorIngredienteController],
      providers: [ProveedorIngredienteService],
    }).compile();

    controller = module.get<ProveedorIngredienteController>(ProveedorIngredienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
