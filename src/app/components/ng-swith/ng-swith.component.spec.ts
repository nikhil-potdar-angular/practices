import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwithComponent } from './ng-swith.component';

describe('NgSwithComponent', () => {
  let component: NgSwithComponent;
  let fixture: ComponentFixture<NgSwithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSwithComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
