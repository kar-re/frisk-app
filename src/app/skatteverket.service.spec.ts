import { TestBed } from '@angular/core/testing';

import { SkatteverketService } from './skatteverket.service';

describe('SkatteverketService', () => {
  let service: SkatteverketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkatteverketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
