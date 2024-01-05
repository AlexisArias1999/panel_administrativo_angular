import { TestBed } from '@angular/core/testing';

import { GrupoEmpresarialServicesService } from './grupo-empresarial-services.service';

describe('GrupoEmpresarialServicesService', () => {
  let service: GrupoEmpresarialServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoEmpresarialServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
