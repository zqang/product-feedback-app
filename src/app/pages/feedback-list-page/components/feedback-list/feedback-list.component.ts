import { NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from '../../services/feedback.service';
import { FeedbackCardComponent } from '../feedback-card/feedback-card.component';

@Component({
  selector: 'app-feedback-list',
  standalone: true,
  imports: [NgOptimizedImage, HttpClientModule, FeedbackCardComponent],
  templateUrl: './feedback-list.component.html',
  styleUrl: './feedback-list.component.css',
  providers: [FeedbackService],
})
export class FeedbackListComponent {
  router = inject(Router);
  feedbackService = inject(FeedbackService);
  items = this.feedbackService.data();

  constructor() {}

  addFeedback() {
    this.router.navigate(['add']);
  }
}
