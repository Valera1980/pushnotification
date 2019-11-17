import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypcecheckComponent } from './typcecheck.component';

describe('TypcecheckComponent', () => {
  let component: TypcecheckComponent;
  let fixture: ComponentFixture<TypcecheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypcecheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypcecheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
