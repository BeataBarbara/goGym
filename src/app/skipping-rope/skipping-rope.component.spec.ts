import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkippingRopeComponent } from './skipping-rope.component';

describe('SkippingRopeComponent', () => {
  let component: SkippingRopeComponent;
  let fixture: ComponentFixture<SkippingRopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkippingRopeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkippingRopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
