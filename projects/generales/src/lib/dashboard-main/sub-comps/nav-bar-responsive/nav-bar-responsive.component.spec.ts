import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarResponsiveComponent } from './nav-bar-responsive.component';

describe('NavBarResponsiveComponent', () => {
  let component: NavBarResponsiveComponent;
  let fixture: ComponentFixture<NavBarResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
