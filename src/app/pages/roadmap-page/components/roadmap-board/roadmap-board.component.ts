import {
  Component,
  Input,
  OnInit,
  Signal,
  inject,
  signal,
} from '@angular/core';
import { FeedbackService } from '../../../../core/services/feedback.service';
import { RoadmapCardComponent } from '../roadmap-card/roadmap-card.component';
import { Feedback } from '../../../feedback-list-page/model/feedback.model';

@Component({
  selector: 'app-roadmap-board',
  standalone: true,
  templateUrl: './roadmap-board.component.html',
  styleUrl: './roadmap-board.component.css',
  imports: [RoadmapCardComponent],
})
export class RoadmapBoardComponent implements OnInit {
  feedbackService = inject(FeedbackService);
  @Input() status!: string;

  feedbacks: Signal<Feedback[]> = signal<Feedback[]>([]);

  constructor() {}

  ngOnInit(): void {
    this.feedbacks = this.feedbackService.getFeedbacksByStatus(this.status);
  }
}
