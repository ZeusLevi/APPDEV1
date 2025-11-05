import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirePokemon } from './fire-pokemon';

describe('FirePokemon', () => {
  let component: FirePokemon;
  let fixture: ComponentFixture<FirePokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirePokemon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirePokemon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
