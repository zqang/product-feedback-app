import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.css',
})
export class FeedbackFormComponent {
  @Input() title!: string;
  @Input() isEdit: boolean = false;

  feedbackForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
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

  constructor() {}

  submit() {
    console.log(this.feedbackForm.value);
  }

  goBack() {
    window.history.back();
  }

  delete() {
    console.log('delete');
  }
}
