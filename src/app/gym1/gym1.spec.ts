import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gym1 } from './gym1';

describe('Gym1', () => {
  let component: Gym1;
  let fixture: ComponentFixture<Gym1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gym1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gym1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
