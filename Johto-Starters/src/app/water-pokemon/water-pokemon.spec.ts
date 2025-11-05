import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterPokemon } from './water-pokemon';

describe('WaterPokemon', () => {
  let component: WaterPokemon;
  let fixture: ComponentFixture<WaterPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaterPokemon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterPokemon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
