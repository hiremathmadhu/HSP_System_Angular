import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteservicebookingComponent } from './deleteservicebooking.component';

describe('DeleteservicebookingComponent', () => {
  let component: DeleteservicebookingComponent;
  let fixture: ComponentFixture<DeleteservicebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteservicebookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteservicebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
