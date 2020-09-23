import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopHopComponent } from './hop-hop.component';

describe('HopHopComponent', () => {
  let component: HopHopComponent;
  let fixture: ComponentFixture<HopHopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HopHopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HopHopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
