import { HttpClientModule } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../../../core/services/feedback.service';
import { Feedback } from '../../../pages/feedback-list-page/model/feedback.model';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.css',
  providers: [FeedbackService],
})
export class FeedbackFormComponent {
  @Input() title!: string;
  @Input() isEdit: boolean = false;
  router = inject(Router);
  route = inject(ActivatedRoute);
  feedback!: Feedback | undefined;
  feedbackService = inject(FeedbackService);

  feedbackForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    status: new FormControl('suggestion', [Validators.required]),
  });

  categoryOptions = [
    { value: 'feature', label: 'Feature' },
    { value: 'ui', label: 'UI' },
    { value: 'ux', label: 'UX' },
    { value: 'enhancement', label: 'Enhancement' },
    { value: 'bug', label: 'Bug' },
  ];

  statusOptions = [
    { value: 'suggestion', label: 'Suggestion' },
    { value: 'planned', label: 'Planned' },
    { value: 'in-progress', label: 'In-Progress' },
    { value: 'live', label: 'Live' },
  ];

  constructor() {
    this.route.paramMap.subscribe((params) => {
      var selectedId = Number(params.get('id'));
      this.feedback = this.feedbackService
        .data()
        .productRequests.find((x) => x.id === selectedId);
    });

    if (this.feedback) {
      this.feedbackForm.get('title')?.setValue(this.feedback.title);
      this.feedbackForm.get('description')?.setValue(this.feedback.description);
      this.feedbackForm.get('category')?.setValue(this.feedback.category);
      this.feedbackForm.get('status')?.setValue(this.feedback.status);
    }
  }

  submit() {
    console.log(this.feedbackForm.valid);
    console.log(this.feedbackForm.getRawValue());
    if (this.feedbackForm.valid) {
      const feedback: Feedback = {
        id: this.isEdit ? this.feedback?.id! : 1,
        upvotes: this.isEdit ? this.feedback?.upvotes! : 0,
        upvoted: this.isEdit ? this.feedback?.upvoted! : false,
        comments: this.isEdit ? this.feedback?.comments! : [],
        title: this.feedbackForm.get('title')?.value!,
        description: this.feedbackForm.get('description')?.value!,
        category: this.feedbackForm.get('category')?.value!,
        status: this.feedbackForm.get('status')?.value!,
      };
      this.isEdit
        ? this.feedbackService.editFeedback(feedback)
        : this.feedbackService.addFeedback(feedback);

      this.router.navigate(['/']);
    }
  }

  goBack() {
    window.history.back();
  }

  delete(feedback: Feedback) {
    this.feedbackService.deleteFeedback(feedback);
  }
}
