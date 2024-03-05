import { NgOptimizedImage } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback, FeedbackModel } from '../../model/feedback.model';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-feedback-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './feedback-card.component.html',
  styleUrl: './feedback-card.component.css',
})
export class FeedbackCardComponent {
  @Input() feedback: Feedback = {} as Feedback;
  router = inject(Router);
  route = inject(ActivatedRoute);
  feedbackService = inject(FeedbackService);

  upvote(feedback: Feedback) {
    this.feedbackService.data.update((feedbackModel: FeedbackModel) => {
      feedbackModel.productRequests.forEach((value: Feedback) => {
        if (value.id === feedback.id) {
          if (!value.upvoted) {
            value.upvotes++;
            value.upvoted = true;
          } else {
            value.upvotes--;
            value.upvoted = false;
          }
        }
      });
      return feedbackModel;
    });
  }

  goToDetail(id: number) {
    this.router.navigate([id.toString()], { relativeTo: this.route });
  }
}
