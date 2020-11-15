import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseByBusinessAreaComponent } from './expense-by-business-area.component';

describe('ExpenseByBusinessAreaComponent', () => {
  let component: ExpenseByBusinessAreaComponent;
  let fixture: ComponentFixture<ExpenseByBusinessAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseByBusinessAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseByBusinessAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
