import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackFormComponent } from '../../shared/components/feedback-form/feedback-form.component';

@Component({
  selector: 'app-edit-feedback-page',
  standalone: true,
  imports: [FeedbackFormComponent, NgOptimizedImage],
  templateUrl: './edit-feedback-page.component.html',
  styleUrl: './edit-feedback-page.component.css',
})
export class EditFeedbackPageComponent {
  router = inject(Router);

  goBack() {
    window.history.back();
  }
}
