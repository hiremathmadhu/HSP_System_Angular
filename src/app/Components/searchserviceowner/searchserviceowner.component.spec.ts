import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchserviceownerComponent } from './searchserviceowner.component';

describe('SearchserviceownerComponent', () => {
  let component: SearchserviceownerComponent;
  let fixture: ComponentFixture<SearchserviceownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchserviceownerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchserviceownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
