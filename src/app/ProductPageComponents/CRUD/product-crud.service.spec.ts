import { TestBed } from '@angular/core/testing';

import { ProductCRUDService } from './product-crud.service';

describe('ProductCRUDService', () => {
  let service: ProductCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
