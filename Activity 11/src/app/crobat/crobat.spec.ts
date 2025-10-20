import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crobat } from './crobat';

describe('Crobat', () => {
  let component: Crobat;
  let fixture: ComponentFixture<Crobat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Crobat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Crobat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
