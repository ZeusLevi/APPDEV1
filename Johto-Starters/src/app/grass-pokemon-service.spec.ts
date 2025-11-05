import { TestBed } from '@angular/core/testing';

import { GrassPokemonService } from './grass-pokemon-service';

describe('GrassPokemonService', () => {
  let service: GrassPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrassPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
