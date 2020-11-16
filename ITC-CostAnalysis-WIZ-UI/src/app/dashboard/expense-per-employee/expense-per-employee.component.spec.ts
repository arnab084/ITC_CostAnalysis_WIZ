import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExpensePerEmployeeComponent } from './expense-per-employee.component';

describe('ExpensePerEmployeeComponent', () => {
  let component: ExpensePerEmployeeComponent;
  let fixture: ComponentFixture<ExpensePerEmployeeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensePerEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensePerEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
