import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteservicecategoryComponent } from './deleteservicecategory.component';

describe('DeleteservicecategoryComponent', () => {
  let component: DeleteservicecategoryComponent;
  let fixture: ComponentFixture<DeleteservicecategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteservicecategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteservicecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
