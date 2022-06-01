import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllServiceownerComponent } from './view-all-serviceowner.component';

describe('ViewAllServiceownerComponent', () => {
  let component: ViewAllServiceownerComponent;
  let fixture: ComponentFixture<ViewAllServiceownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllServiceownerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllServiceownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
