import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCilesComponent } from './life-ciles.component';

describe('LifeCilesComponent', () => {
  let component: LifeCilesComponent;
  let fixture: ComponentFixture<LifeCilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
