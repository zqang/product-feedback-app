import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FeedbackService } from '../../core/services/feedback.service';
import { FeedbackListComponent } from './components/feedback-list/feedback-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-feedback-list-page',
  standalone: true,
  imports: [FeedbackListComponent, SidebarComponent, HttpClientModule],
  templateUrl: './feedback-list-page.component.html',
  styleUrl: './feedback-list-page.component.css',
  providers: [FeedbackService],
})
export class FeedbackListPageComponent {}
