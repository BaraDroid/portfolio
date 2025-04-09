import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavdotsComponent } from './navdots.component';

describe('NavdotsComponent', () => {
  let component: NavdotsComponent;
  let fixture: ComponentFixture<NavdotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavdotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavdotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
