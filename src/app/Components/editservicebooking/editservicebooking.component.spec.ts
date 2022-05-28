import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditservicebookingComponent } from './editservicebooking.component';

describe('EditservicebookingComponent', () => {
  let component: EditservicebookingComponent;
  let fixture: ComponentFixture<EditservicebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditservicebookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditservicebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
