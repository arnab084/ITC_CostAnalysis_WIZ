import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExpenseByBranchComponent } from './expense-by-branch.component';

describe('ExpenseByBranchComponent', () => {
  let component: ExpenseByBranchComponent;
  let fixture: ComponentFixture<ExpenseByBranchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseByBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseByBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
