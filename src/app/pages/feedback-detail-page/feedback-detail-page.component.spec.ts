import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackDetailPageComponent } from './feedback-detail-page.component';

describe('FeedbackDetailPageComponent', () => {
  let component: FeedbackDetailPageComponent;
  let fixture: ComponentFixture<FeedbackDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackDetailPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
