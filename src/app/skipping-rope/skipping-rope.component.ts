import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skipping-rope',
  templateUrl: './skipping-rope.component.svg',
  styleUrls: ['./skipping-rope.component.css']
})
export class SkippingRopeComponent implements OnInit {
  velocity =150;

  @ViewChild('pos1') pos1: ElementRef;
  @ViewChild('pos2') pos2: ElementRef;
  @ViewChild('pos3') pos3: ElementRef;
  @ViewChild('pos4') pos4: ElementRef;
  @ViewChild('pos5') pos5: ElementRef;
  @ViewChild('pos6') pos6: ElementRef;
  @ViewChild('pos7') pos7: ElementRef;
  @ViewChild('pos8') pos8: ElementRef;
  @ViewChild('pos9') pos9: ElementRef;
  @ViewChild('pos10') pos10: ElementRef;
  @ViewChild('pos11') pos11: ElementRef;

  ngOnInit() {
    this.setInt(this.velocity)
  }

  setInt (vel) {
    setInterval (() => this.skippingRope(), vel)
  }
  skippingRope() {
    console.info(this.velocity)
    if (!this.pos1.nativeElement.classList.contains('hide')) {
      this.pos1.nativeElement.classList.add('hide')
      this.pos2.nativeElement.classList.remove('hide')       
    } else if (!this.pos2.nativeElement.classList.contains('hide')) {
      this.pos2.nativeElement.classList.add('hide')
      this.pos3.nativeElement.classList.remove('hide')       
    } else if (!this.pos3.nativeElement.classList.contains('hide')) {
      this.pos3.nativeElement.classList.add('hide')
      this.pos4.nativeElement.classList.remove('hide')       
    } else if (!this.pos4.nativeElement.classList.contains('hide')) {
      this.pos4.nativeElement.classList.add('hide')
      this.pos5.nativeElement.classList.remove('hide')       
    } else if (!this.pos5.nativeElement.classList.contains('hide')) {
      this.pos5.nativeElement.classList.add('hide')
      this.pos6.nativeElement.classList.remove('hide')       
    } else if (!this.pos6.nativeElement.classList.contains('hide')) {
      this.pos6.nativeElement.classList.add('hide')
      this.pos7.nativeElement.classList.remove('hide')       
    } else if (!this.pos7.nativeElement.classList.contains('hide')) {
      this.pos7.nativeElement.classList.add('hide')
      this.pos8.nativeElement.classList.remove('hide')       
    } else if (!this.pos8.nativeElement.classList.contains('hide')) {
      this.pos8.nativeElement.classList.add('hide')
      this.pos9.nativeElement.classList.remove('hide')       
    } else if (!this.pos9.nativeElement.classList.contains('hide')) {
      this.pos9.nativeElement.classList.add('hide')
      this.pos10.nativeElement.classList.remove('hide')       
    } else if (!this.pos10.nativeElement.classList.contains('hide')) {
      this.pos10.nativeElement.classList.add('hide')
      this.pos11.nativeElement.classList.remove('hide')       
    }  else  {
      this.pos11.nativeElement.classList.add('hide')
      this.pos1.nativeElement.classList.remove('hide')       
    } 
  }
}
