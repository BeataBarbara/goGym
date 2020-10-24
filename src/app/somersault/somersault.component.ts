import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-somersault',
  templateUrl: './somersault.component.svg',
  styleUrls: ['./somersault.component.css']
})
export class SomersaultComponent implements OnInit {

  velocity: any;
  vel: any = 300;

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
  @ViewChild('velocity') myVelocity: ElementRef

  ngOnInit() {
    this.change(this.vel);
  }

  change(myVelocity: number) {
    clearInterval(this.velocity)
    this.velocity = setInterval (() => this.somersault(), myVelocity)
  }

  somersault() {
    console.log(this.velocity)
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
      this.pos1.nativeElement.classList.remove('hide')       
    } 
  }
}
