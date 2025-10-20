import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hitmontop } from './hitmontop';

describe('Hitmontop', () => {
  let component: Hitmontop;
  let fixture: ComponentFixture<Hitmontop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hitmontop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hitmontop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
