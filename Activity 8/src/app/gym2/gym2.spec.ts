import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gym2 } from './gym2';

describe('Gym2', () => {
  let component: Gym2;
  let fixture: ComponentFixture<Gym2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gym2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gym2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
