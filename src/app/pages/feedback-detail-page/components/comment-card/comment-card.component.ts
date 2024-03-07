import { NgOptimizedImage } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from '../../../../core/services/feedback.service';
import { Comment } from '../../../feedback-list-page/model/feedback.model';

@Component({
  selector: 'app-comment-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './comment-card.component.html',
  styleUrl: './comment-card.component.css',
})
export class CommentCardComponent {
  @Input() comment: Comment = {} as Comment;
  feedbackService = inject(FeedbackService);
  router = inject(Router);
  constructor() {}

  // reply() {
  //   this.feedbackService.addReplies(comment);
  // }
}
