import { NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackCardComponent } from '../feedback-list-page/components/feedback-card/feedback-card.component';
import { Feedback } from '../feedback-list-page/model/feedback.model';
import { FeedbackService } from '../feedback-list-page/services/feedback.service';
import { CommentCardComponent } from './components/comment-card/comment-card.component';

@Component({
  selector: 'app-feedback-detail-page',
  standalone: true,
  templateUrl: './feedback-detail-page.component.html',
  styleUrl: './feedback-detail-page.component.css',
  providers: [FeedbackService],
  imports: [
    FeedbackCardComponent,
    HttpClientModule,
    NgOptimizedImage,
    CommentCardComponent,
  ],
})
export class FeedbackDetailPageComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  feedbackService = inject(FeedbackService);
  feedback: Feedback | undefined;
  feedbackCommentNums = 0;
  constructor() {
    this.route.paramMap.subscribe((params) => {
      var selectedId = Number(params.get('id'));
      this.feedback = this.feedbackService
        .data()
        .productRequests.find((x) => x.id === selectedId);
      this.feedbackCommentNums = this.feedback?.comments.length!;
    });
  }

  goBack() {
    this.router.navigate(['..']);
  }

  editFeedback() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
