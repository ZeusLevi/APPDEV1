import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gym7 } from './gym7';

describe('Gym7', () => {
  let component: Gym7;
  let fixture: ComponentFixture<Gym7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gym7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gym7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
