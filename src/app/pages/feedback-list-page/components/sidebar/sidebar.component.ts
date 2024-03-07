import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeedbackService } from '../../../../core/services/feedback.service';
import { Tag } from '../../model/tag.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  feedbackService = inject(FeedbackService);
  public tag: Tag[] = this.feedbackService.tag();

  setActive(tag: Tag) {
    this.feedbackService.setTagActive(tag);
  }

  constructor() {}
}
