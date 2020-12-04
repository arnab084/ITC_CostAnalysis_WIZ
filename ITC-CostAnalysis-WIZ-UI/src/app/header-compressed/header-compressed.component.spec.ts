import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCompressedComponent } from './header-compressed.component';

describe('HeaderCompressedComponent', () => {
  let component: HeaderCompressedComponent;
  let fixture: ComponentFixture<HeaderCompressedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCompressedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCompressedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
