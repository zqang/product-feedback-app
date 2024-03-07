import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentHeaderComponent } from './comment-header.component';

describe('CommentHeaderComponent', () => {
  let component: CommentHeaderComponent;
  let fixture: ComponentFixture<CommentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
