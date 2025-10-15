import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gym5 } from './gym5';

describe('Gym5', () => {
  let component: Gym5;
  let fixture: ComponentFixture<Gym5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gym5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gym5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
