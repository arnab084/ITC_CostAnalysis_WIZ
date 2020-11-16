import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExpenseByEmployeeGradeComponent } from './expense-by-employee-grade.component';

describe('ExpenseByEmployeeGradeComponent', () => {
  let component: ExpenseByEmployeeGradeComponent;
  let fixture: ComponentFixture<ExpenseByEmployeeGradeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseByEmployeeGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseByEmployeeGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
