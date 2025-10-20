import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Espeon } from './espeon';

describe('Espeon', () => {
  let component: Espeon;
  let fixture: ComponentFixture<Espeon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Espeon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Espeon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
