import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallservicecategoryComponent } from './viewallservicecategory.component';

describe('ViewallservicecategoryComponent', () => {
  let component: ViewallservicecategoryComponent;
  let fixture: ComponentFixture<ViewallservicecategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallservicecategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallservicecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
