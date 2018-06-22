
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegationComponent } from './navegation.component';

describe('NavegationComponent', () => {
  let component: NavegationComponent;
  let fixture: ComponentFixture<NavegationComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
