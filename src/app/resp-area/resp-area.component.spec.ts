import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespAreaComponent } from './resp-area.component';

describe('RespAreaComponent', () => {
  let component: RespAreaComponent;
  let fixture: ComponentFixture<RespAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
