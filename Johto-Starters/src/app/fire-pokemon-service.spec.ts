import { TestBed } from '@angular/core/testing';

import { FirePokemonService } from './fire-pokemon-service';

describe('FirePokemonService', () => {
  let service: FirePokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirePokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
