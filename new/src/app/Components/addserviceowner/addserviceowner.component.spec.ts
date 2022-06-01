import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddserviceownerComponent } from './addserviceowner.component';

describe('AddserviceownerComponent', () => {
  let component: AddserviceownerComponent;
  let fixture: ComponentFixture<AddserviceownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddserviceownerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddserviceownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
