import { Component, Input, inject } from '@angular/core';
import {
  Feedback,
  FeedbackModel,
} from '../../../feedback-list-page/model/feedback.model';
import { FeedbackService } from '../../../../core/services/feedback.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-roadmap-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './roadmap-card.component.html',
  styleUrl: './roadmap-card.component.css',
})
export class RoadmapCardComponent {
  @Input() feedback!: Feedback;
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
}
