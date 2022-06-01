import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchservicecategoryComponent } from './searchservicecategory.component';

describe('SearchservicecategoryComponent', () => {
  let component: SearchservicecategoryComponent;
  let fixture: ComponentFixture<SearchservicecategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchservicecategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchservicecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
