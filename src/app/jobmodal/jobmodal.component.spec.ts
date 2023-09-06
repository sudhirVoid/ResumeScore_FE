import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobmodalComponent } from './jobmodal.component';

describe('JobmodalComponent', () => {
  let component: JobmodalComponent;
  let fixture: ComponentFixture<JobmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
