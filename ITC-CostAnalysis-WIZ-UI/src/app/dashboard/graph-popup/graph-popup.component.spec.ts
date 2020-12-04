import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GraphPopupComponent } from './graph-popup.component';

describe('GraphPopupComponent', () => {
  let component: GraphPopupComponent;
  let fixture: ComponentFixture<GraphPopupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
