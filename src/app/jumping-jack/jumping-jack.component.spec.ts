import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpingJackComponent } from './jumping-jack.component';

describe('JumpingJackComponent', () => {
  let component: JumpingJackComponent;
  let fixture: ComponentFixture<JumpingJackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumpingJackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpingJackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
