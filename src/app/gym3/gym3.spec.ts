import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gym3 } from './gym3';

describe('Gym3', () => {
  let component: Gym3;
  let fixture: ComponentFixture<Gym3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gym3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gym3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
