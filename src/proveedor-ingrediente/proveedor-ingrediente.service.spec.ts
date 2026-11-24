import { Test, TestingModule } from '@nestjs/testing';
import { ProveedorIngredienteService } from './proveedor-ingrediente.service.js';

describe('ProveedorIngredienteService', () => {
  let service: ProveedorIngredienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProveedorIngredienteService],
    }).compile();

    service = module.get<ProveedorIngredienteService>(ProveedorIngredienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
