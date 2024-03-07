import { NgOptimizedImage } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackService } from '../../../../core/services/feedback.service';
import {
  Comment,
  Reply,
} from '../../../feedback-list-page/model/feedback.model';

@Component({
  selector: 'app-reply-card',
  standalone: true,
  imports: [NgOptimizedImage, FormsModule],
  templateUrl: './reply-card.component.html',
  styleUrl: './reply-card.component.css',
})
export class ReplyCardComponent {
  @Input() reply: Reply = {} as Reply;
  @Input() comment: Comment = {} as Comment;
  showReplyBox: boolean = false;
  feedbackService = inject(FeedbackService);
  router = inject(Router);
  replyValue: string = '';
  constructor() {}

  postReply() {
    this.feedbackService.addReply(
      this.comment,
      this.replyValue,
      this.reply.user.name
    );
    this.showReplyBox = false;
    this.replyValue = '';
  }

  toggleReply() {
    this.showReplyBox = !this.showReplyBox;
  }
}
