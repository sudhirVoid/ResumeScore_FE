import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAllDetailsComponent } from './job-all-details.component';

describe('JobAllDetailsComponent', () => {
  let component: JobAllDetailsComponent;
  let fixture: ComponentFixture<JobAllDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAllDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobAllDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
