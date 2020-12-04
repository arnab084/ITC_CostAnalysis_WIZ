import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExpenseByDesignationComponent } from './expense-by-designation.component';

describe('ExpenseByDesignationComponent', () => {
  let component: ExpenseByDesignationComponent;
  let fixture: ComponentFixture<ExpenseByDesignationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseByDesignationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseByDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
