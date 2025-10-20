import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tyranitar } from './tyranitar';

describe('Tyranitar', () => {
  let component: Tyranitar;
  let fixture: ComponentFixture<Tyranitar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tyranitar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tyranitar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
