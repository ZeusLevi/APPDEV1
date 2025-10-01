import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gym8 } from './gym8';

describe('Gym8', () => {
  let component: Gym8;
  let fixture: ComponentFixture<Gym8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gym8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gym8);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
