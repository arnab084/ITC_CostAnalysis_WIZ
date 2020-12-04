import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExpenseByCostCenterComponent } from './expense-by-cost-center.component';

describe('ExpenseByCostCenterComponent', () => {
  let component: ExpenseByCostCenterComponent;
  let fixture: ComponentFixture<ExpenseByCostCenterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseByCostCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseByCostCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
