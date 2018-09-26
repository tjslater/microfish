import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RothkoComponent } from './rothko.component';

describe('RothkoComponent', () => {
  let component: RothkoComponent;
  let fixture: ComponentFixture<RothkoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RothkoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RothkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
