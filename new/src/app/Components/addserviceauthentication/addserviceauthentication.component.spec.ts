import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddserviceauthenticationComponent } from './addserviceauthentication.component';

describe('AddserviceauthenticationComponent', () => {
  let component: AddserviceauthenticationComponent;
  let fixture: ComponentFixture<AddserviceauthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddserviceauthenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddserviceauthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
