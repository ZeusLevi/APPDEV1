import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gym4 } from './gym4';

describe('Gym4', () => {
  let component: Gym4;
  let fixture: ComponentFixture<Gym4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gym4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gym4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
