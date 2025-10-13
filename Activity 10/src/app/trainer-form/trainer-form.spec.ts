import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerForm } from './trainer-form';

describe('TrainerForm', () => {
  let component: TrainerForm;
  let fixture: ComponentFixture<TrainerForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainerForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
