import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomersaultComponent } from './somersault.component';

describe('SomersaultComponent', () => {
  let component: SomersaultComponent;
  let fixture: ComponentFixture<SomersaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomersaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomersaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
