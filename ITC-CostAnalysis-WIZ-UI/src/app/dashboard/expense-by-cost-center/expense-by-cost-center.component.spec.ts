import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseByCostCenterComponent } from './expense-by-cost-center.component';

describe('ExpenseByCostCenterComponent', () => {
  let component: ExpenseByCostCenterComponent;
  let fixture: ComponentFixture<ExpenseByCostCenterComponent>;

  beforeEach(async(() => {
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
