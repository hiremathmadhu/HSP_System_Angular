import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchservicebookingComponent } from './searchservicebooking.component';

describe('SearchservicebookingComponent', () => {
  let component: SearchservicebookingComponent;
  let fixture: ComponentFixture<SearchservicebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchservicebookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchservicebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
