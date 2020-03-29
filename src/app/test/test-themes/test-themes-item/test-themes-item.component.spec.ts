import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestThemesItemComponent } from './test-themes-item.component';

describe('TestThemesItemComponent', () => {
  let component: TestThemesItemComponent;
  let fixture: ComponentFixture<TestThemesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestThemesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestThemesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
