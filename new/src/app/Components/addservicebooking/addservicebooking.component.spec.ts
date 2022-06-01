import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddservicebookingComponent } from './addservicebooking.component';

describe('AddservicebookingComponent', () => {
  let component: AddservicebookingComponent;
  let fixture: ComponentFixture<AddservicebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddservicebookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddservicebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
