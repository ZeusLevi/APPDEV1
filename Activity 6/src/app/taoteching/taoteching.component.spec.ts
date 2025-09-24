import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaotechingComponent } from './taoteching.component';

describe('TaotechingComponent', () => {
  let component: TaotechingComponent;
  let fixture: ComponentFixture<TaotechingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaotechingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaotechingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
