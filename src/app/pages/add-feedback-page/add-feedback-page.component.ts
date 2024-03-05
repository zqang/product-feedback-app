import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackFormComponent } from '../../shared/components/feedback-form/feedback-form.component';

@Component({
  selector: 'app-add-feedback-page',
  standalone: true,
  templateUrl: './add-feedback-page.component.html',
  styleUrl: './add-feedback-page.component.css',
  imports: [NgOptimizedImage, FeedbackFormComponent],
})
export class AddFeedbackPageComponent {
  router = inject(Router);

  goBack() {
    window.history.back();
  }
}
