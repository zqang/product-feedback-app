import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import feedbackData from '../../../../data.json';
import { FeedbackModel } from '../model/feedback.model';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private httpClient = inject(HttpClient);

  data = signal<FeedbackModel>({
    currentUser: {
      image: './assets/user-images/image-anne.jpg',
      name: 'Anne Valentine',
      username: 'annev1990',
    },
    productRequests: [],
  });

  constructor() {
    this.data.set(feedbackData);
  }
}
