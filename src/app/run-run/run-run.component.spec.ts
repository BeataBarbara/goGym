import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunRunComponent } from './run-run.component';

describe('RunRunComponent', () => {
  let component: RunRunComponent;
  let fixture: ComponentFixture<RunRunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunRunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
