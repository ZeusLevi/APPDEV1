import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quagsire } from './quagsire';

describe('Quagsire', () => {
  let component: Quagsire;
  let fixture: ComponentFixture<Quagsire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Quagsire]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quagsire);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
