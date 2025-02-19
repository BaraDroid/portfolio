import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdReviewComponent } from './third-review.component';

describe('ThirdReviewComponent', () => {
  let component: ThirdReviewComponent;
  let fixture: ComponentFixture<ThirdReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
