import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditserviceownerComponent } from './editserviceowner.component';

describe('EditserviceownerComponent', () => {
  let component: EditserviceownerComponent;
  let fixture: ComponentFixture<EditserviceownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditserviceownerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditserviceownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
