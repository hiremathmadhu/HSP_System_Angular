import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllServiceauthenticationComponent } from './view-all-serviceauthentication.component';

describe('ViewAllServiceauthenticationComponent', () => {
  let component: ViewAllServiceauthenticationComponent;
  let fixture: ComponentFixture<ViewAllServiceauthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllServiceauthenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllServiceauthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
