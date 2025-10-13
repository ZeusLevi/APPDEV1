import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokeballs } from './pokeballs';

describe('Pokeballs', () => {
  let component: Pokeballs;
  let fixture: ComponentFixture<Pokeballs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pokeballs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pokeballs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
