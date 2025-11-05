import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrassPokemon } from './grass-pokemon';

describe('GrassPokemon', () => {
  let component: GrassPokemon;
  let fixture: ComponentFixture<GrassPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrassPokemon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrassPokemon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
