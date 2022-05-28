import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditserviceauthenticationComponent } from './editserviceauthentication.component';

describe('EditserviceauthenticationComponent', () => {
  let component: EditserviceauthenticationComponent;
  let fixture: ComponentFixture<EditserviceauthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditserviceauthenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditserviceauthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
