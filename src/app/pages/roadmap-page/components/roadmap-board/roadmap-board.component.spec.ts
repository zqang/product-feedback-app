import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapBoardComponent } from './roadmap-board.component';

describe('RoadmapBoardComponent', () => {
  let component: RoadmapBoardComponent;
  let fixture: ComponentFixture<RoadmapBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadmapBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoadmapBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
