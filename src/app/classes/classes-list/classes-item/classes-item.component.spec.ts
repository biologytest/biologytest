import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesItemComponent } from './classes-item.component';

describe('ClassesItemComponent', () => {
  let component: ClassesItemComponent;
  let fixture: ComponentFixture<ClassesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
