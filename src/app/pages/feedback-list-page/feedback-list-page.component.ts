import { Component } from '@angular/core';
import { FeedbackListComponent } from './components/feedback-list/feedback-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-feedback-list-page',
  standalone: true,
  imports: [FeedbackListComponent, SidebarComponent],
  templateUrl: './feedback-list-page.component.html',
  styleUrl: './feedback-list-page.component.css',
})
export class FeedbackListPageComponent {}
