import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensePerEmployeeComponent } from './expense-per-employee.component';

describe('ExpensePerEmployeeComponent', () => {
  let component: ExpensePerEmployeeComponent;
  let fixture: ComponentFixture<ExpensePerEmployeeComponent>;

  beforeEach(async(() => {
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
