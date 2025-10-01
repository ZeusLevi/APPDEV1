import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gym6 } from './gym6';

describe('Gym6', () => {
  let component: Gym6;
  let fixture: ComponentFixture<Gym6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gym6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gym6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
