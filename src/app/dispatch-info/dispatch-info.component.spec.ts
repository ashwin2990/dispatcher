import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchInfoComponent } from './dispatch-info.component';

describe('DispatchInfoComponent', () => {
  let component: DispatchInfoComponent;
  let fixture: ComponentFixture<DispatchInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
