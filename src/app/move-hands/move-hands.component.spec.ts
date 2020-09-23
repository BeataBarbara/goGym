import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveHandsComponent } from './move-hands.component';

describe('MoveHandsComponent', () => {
  let component: MoveHandsComponent;
  let fixture: ComponentFixture<MoveHandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveHandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveHandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
