import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Typhlosion } from './typhlosion';

describe('Typhlosion', () => {
  let component: Typhlosion;
  let fixture: ComponentFixture<Typhlosion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Typhlosion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Typhlosion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
