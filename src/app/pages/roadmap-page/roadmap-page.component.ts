import { NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RoadmapBoardComponent } from './components/roadmap-board/roadmap-board.component';
import { HttpClientModule } from '@angular/common/http';
import { FeedbackService } from '../../core/services/feedback.service';

@Component({
  selector: 'app-roadmap-page',
  standalone: true,
  templateUrl: './roadmap-page.component.html',
  styleUrl: './roadmap-page.component.css',
  imports: [NgOptimizedImage, RoadmapBoardComponent, HttpClientModule],
  providers: [FeedbackService],
})
export class RoadmapPageComponent {
  router = inject(Router);

  statuses = ['Planned', 'In-Progress', 'Live'];

  addFeedback() {
    this.router.navigate(['add']);
  }

  goBack() {
    window.history.back();
  }
}
