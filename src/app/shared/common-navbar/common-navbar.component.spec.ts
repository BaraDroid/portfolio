import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonNavbarComponent } from './common-navbar.component';

describe('CommonNavbarComponent', () => {
  let component: CommonNavbarComponent;
  let fixture: ComponentFixture<CommonNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
