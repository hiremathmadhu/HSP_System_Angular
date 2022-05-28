import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditservicecategoryComponent } from './editservicecategory.component';

describe('EditservicecategoryComponent', () => {
  let component: EditservicecategoryComponent;
  let fixture: ComponentFixture<EditservicecategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditservicecategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditservicecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
