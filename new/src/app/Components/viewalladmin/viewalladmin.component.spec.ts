import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalladminComponent } from './viewalladmin.component';

describe('ViewalladminComponent', () => {
  let component: ViewalladminComponent;
  let fixture: ComponentFixture<ViewalladminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewalladminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewalladminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
