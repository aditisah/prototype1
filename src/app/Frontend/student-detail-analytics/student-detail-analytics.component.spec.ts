import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailAnalyticsComponent } from './student-detail-analytics.component';

describe('StudentDetailAnalyticsComponent', () => {
  let component: StudentDetailAnalyticsComponent;
  let fixture: ComponentFixture<StudentDetailAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDetailAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
