import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveTheFolderComponent } from './above-the-folder.component';

describe('AboveTheFolderComponent', () => {
  let component: AboveTheFolderComponent;
  let fixture: ComponentFixture<AboveTheFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboveTheFolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboveTheFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
