import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tumble',
  templateUrl: './tumble.component.svg',
  styleUrls: ['./tumble.component.css']
})
export class TumbleComponent implements OnInit {
  velocity:  any;
  velocity1: any;
  velocity2: any;
  velocity3: any;
  velocity4: any;

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
  @ViewChild('pos12') pos12: ElementRef;
  @ViewChild('pos13') pos13: ElementRef;
  @ViewChild('pos14') pos14: ElementRef;
  @ViewChild('pos15') pos15: ElementRef;
  @ViewChild('pos16') pos16: ElementRef;
  @ViewChild('pos17') pos17: ElementRef;
  @ViewChild('pos18') pos18: ElementRef;
  @ViewChild('pos19') pos19: ElementRef;
  @ViewChild('pos20') pos20: ElementRef;
  @ViewChild('pos21') pos21: ElementRef;
  @ViewChild('pos22') pos22: ElementRef;
  @ViewChild('pos23') pos23: ElementRef;

  ngOnInit() {
    this.doMedium(200);
  }

  reset() {
    clearInterval(this.velocity)
    console.log(this.velocity)
  }

  doSlowly(velocity1) {
    clearInterval(this.velocity)
    this.velocity =setInterval (() => this.tumble(), velocity1)
  }

  doMedium(velocity2) {
    clearInterval(this.velocity)
    this.velocity =setInterval (() => this.tumble(), velocity2)
  }
  doFast(velocity3) {
    clearInterval(this.velocity)
    this.velocity =setInterval (() => this.tumble(), velocity3)
  }
  doVeryFast(velocity4) {
    clearInterval(this.velocity)
    this.velocity =setInterval (() => this.tumble(), velocity4)
  }

  tumble() {
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
    } else if (!this.pos11.nativeElement.classList.contains('hide')) {
      this.pos11.nativeElement.classList.add('hide')
      this.pos12.nativeElement.classList.remove('hide')       
    } else if  (!this.pos12.nativeElement.classList.contains('hide')) {
      this.pos12.nativeElement.classList.add('hide')
      this.pos13.nativeElement.classList.remove('hide')       
    } else if (!this.pos13.nativeElement.classList.contains('hide')) {
      this.pos13.nativeElement.classList.add('hide')
      this.pos14.nativeElement.classList.remove('hide')       
    } else if (!this.pos14.nativeElement.classList.contains('hide')) {
      this.pos14.nativeElement.classList.add('hide')
      this.pos15.nativeElement.classList.remove('hide')       
    } else if (!this.pos15.nativeElement.classList.contains('hide')) {
      this.pos15.nativeElement.classList.add('hide')
      this.pos16.nativeElement.classList.remove('hide')       
    } else if (!this.pos16.nativeElement.classList.contains('hide')) {
      this.pos16.nativeElement.classList.add('hide')
      this.pos17.nativeElement.classList.remove('hide')       
    } else if (!this.pos17.nativeElement.classList.contains('hide')) {
      this.pos17.nativeElement.classList.add('hide')
      this.pos18.nativeElement.classList.remove('hide')       
    } else if (!this.pos18.nativeElement.classList.contains('hide')) {
      this.pos18.nativeElement.classList.add('hide')
      this.pos19.nativeElement.classList.remove('hide')       
    } else if (!this.pos19.nativeElement.classList.contains('hide')) {
      this.pos19.nativeElement.classList.add('hide')
      this.pos20.nativeElement.classList.remove('hide')       
    } else if (!this.pos20.nativeElement.classList.contains('hide')) {
      this.pos20.nativeElement.classList.add('hide')
      this.pos21.nativeElement.classList.remove('hide')       
    } else if (!this.pos21.nativeElement.classList.contains('hide')) {
      this.pos21.nativeElement.classList.add('hide')
      this.pos22.nativeElement.classList.remove('hide')       
    } else if (!this.pos22.nativeElement.classList.contains('hide')) {
      this.pos22.nativeElement.classList.add('hide')
      this.pos23.nativeElement.classList.remove('hide')       
    } else  {
      this.pos23.nativeElement.classList.add('hide')
      this.pos1.nativeElement.classList.remove('hide')       
    } 
  }
  

}
