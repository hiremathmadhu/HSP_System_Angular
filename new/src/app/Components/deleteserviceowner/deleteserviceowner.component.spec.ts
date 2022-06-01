import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteserviceownerComponent } from './deleteserviceowner.component';

describe('DeleteserviceownerComponent', () => {
  let component: DeleteserviceownerComponent;
  let fixture: ComponentFixture<DeleteserviceownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteserviceownerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteserviceownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
