import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteserviceauthenticationComponent } from './deleteserviceauthentication.component';

describe('DeleteserviceauthenticationComponent', () => {
  let component: DeleteserviceauthenticationComponent;
  let fixture: ComponentFixture<DeleteserviceauthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteserviceauthenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteserviceauthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
