import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallservicebookingComponent } from './viewallservicebooking.component';

describe('ViewallservicebookingComponent', () => {
  let component: ViewallservicebookingComponent;
  let fixture: ComponentFixture<ViewallservicebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallservicebookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallservicebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
