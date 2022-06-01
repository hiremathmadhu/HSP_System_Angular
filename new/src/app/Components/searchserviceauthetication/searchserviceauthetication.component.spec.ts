import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchserviceautheticationComponent } from './searchserviceauthetication.component';

describe('SearchserviceautheticationComponent', () => {
  let component: SearchserviceautheticationComponent;
  let fixture: ComponentFixture<SearchserviceautheticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchserviceautheticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchserviceautheticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
