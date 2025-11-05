import { TestBed } from '@angular/core/testing';

import { WaterPokemonService } from './water-pokemon-service';

describe('WaterPokemonService', () => {
  let service: WaterPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
