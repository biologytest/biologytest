import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestThemesComponent } from './test-themes.component';

describe('TestThemesComponent', () => {
  let component: TestThemesComponent;
  let fixture: ComponentFixture<TestThemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestThemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
