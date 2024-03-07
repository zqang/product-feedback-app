import { NgOptimizedImage } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from '../../../../core/services/feedback.service';
import { Feedback } from '../../model/feedback.model';
import { FeedbackCardComponent } from '../feedback-card/feedback-card.component';

@Component({
  selector: 'app-feedback-list',
  standalone: true,
  imports: [NgOptimizedImage, FeedbackCardComponent],
  templateUrl: './feedback-list.component.html',
  styleUrl: './feedback-list.component.css',
})
export class FeedbackListComponent {
  router = inject(Router);
  feedbackService = inject(FeedbackService);
  public filteredData = computed(() => {
    return this.sortFeedback(
      this.feedbackService
        .data()
        .productRequests.filter((feedback: Feedback) => {
          let activeTag = this.feedbackService
            .tag()
            .find((tag) => tag.active)?.name;
          return activeTag === 'All'
            ? feedback
            : feedback.category === activeTag?.toLowerCase();
        })
    );
  });

  isDropdownOpen = false;

  sortBys: string[] = [
    'Most Upvotes',
    'Least Upvotes',
    'Most Comments',
    'Least Comments',
  ];

  selectedSort = signal('Most Upvotes');

  constructor() {}

  addFeedback() {
    this.router.navigate(['add']);
  }

  openDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  setSort(sortBy: string) {
    this.isDropdownOpen = false;
    this.selectedSort.set(sortBy);
  }

  sortFeedback(productRequests: Feedback[]): Feedback[] {
    if (this.selectedSort() === 'Most Upvotes') {
      return productRequests.sort((a, b) => b.upvotes - a.upvotes);
    } else if (this.selectedSort() === 'Least Upvotes') {
      return productRequests.sort((a, b) => a.upvotes - b.upvotes);
    } else if (this.selectedSort() === 'Most Comments') {
      return productRequests.sort(
        (a, b) => b.comments.length - a.comments.length
      );
    } else if (this.selectedSort() === 'Least Comments') {
      return productRequests.sort(
        (a, b) => a.comments.length - b.comments.length
      );
    } else {
      return productRequests;
    }
  }
}
