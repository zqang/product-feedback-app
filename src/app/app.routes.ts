import { Routes } from '@angular/router';
import { AddFeedbackPageComponent } from './pages/add-feedback-page/add-feedback-page.component';
import { EditFeedbackPageComponent } from './pages/edit-feedback-page/edit-feedback-page.component';
import { FeedbackDetailPageComponent } from './pages/feedback-detail-page/feedback-detail-page.component';
import { FeedbackListPageComponent } from './pages/feedback-list-page/feedback-list-page.component';
import { RoadmapPageComponent } from './pages/roadmap-page/roadmap-page.component';

export const routes: Routes = [
  {
    path: '',
    component: FeedbackListPageComponent,
  },
  {
    path: 'add',
    component: AddFeedbackPageComponent,
  },
  {
    path: 'roadmap',
    component: RoadmapPageComponent,
  },
  {
    path: ':id/edit',
    component: EditFeedbackPageComponent,
  },
  {
    path: ':id',
    component: FeedbackDetailPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
