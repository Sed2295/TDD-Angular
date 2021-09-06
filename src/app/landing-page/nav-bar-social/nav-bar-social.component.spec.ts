import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSocialComponent } from './nav-bar-social.component';

describe('NavBarSocialComponent', () => {
  let component: NavBarSocialComponent;
  let fixture: ComponentFixture<NavBarSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
