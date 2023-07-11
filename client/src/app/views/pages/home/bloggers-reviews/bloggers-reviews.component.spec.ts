import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggersReviewsComponent } from './bloggers-reviews.component';

describe('BloggersReviewsComponent', () => {
  let component: BloggersReviewsComponent;
  let fixture: ComponentFixture<BloggersReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloggersReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloggersReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
