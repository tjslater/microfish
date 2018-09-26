import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRothkoComponent } from './material-rothko.component';

describe('MaterialRothkoComponent', () => {
  let component: MaterialRothkoComponent;
  let fixture: ComponentFixture<MaterialRothkoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialRothkoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialRothkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
