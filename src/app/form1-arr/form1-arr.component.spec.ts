import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form1ArrComponent } from './form1-arr.component';

describe('Form1ArrComponent', () => {
  let component: Form1ArrComponent;
  let fixture: ComponentFixture<Form1ArrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form1ArrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form1ArrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
