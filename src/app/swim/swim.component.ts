import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-swim',
  templateUrl: './swim.component.svg',
  styleUrls: ['./swim.component.css']
})
export class SwimComponent implements OnInit {
  velocity =500;

  @ViewChild('hands1') hands1: ElementRef;
  @ViewChild('hands2') hands2: ElementRef;
  @ViewChild('head1') head1: ElementRef;
  @ViewChild('head2') head2: ElementRef;
  @ViewChild('body1') body1: ElementRef;
  @ViewChild('body2') body2: ElementRef;
  @ViewChild('path1') path1: ElementRef;
  @ViewChild('path2') path2: ElementRef;
  @ViewChild('path3') path3: ElementRef;
  @ViewChild('path4') path4: ElementRef; 
 
  ngOnInit() {
    this.setInt(this.velocity);
  }

  setInt (vel) {
    setInterval (() => this.swimHands(), vel)
    setInterval (() => this.swimBody(), vel*20)
    setInterval (() => this.wave(), vel)
  }
  swimHands () {
    if(this.hands1.nativeElement.classList.contains('hide')) {
      this.hands1.nativeElement.classList.remove('hide')
      this.hands2.nativeElement.classList.add('hide')
    } else {
      this.hands1.nativeElement.classList.add('hide')
      this.hands2.nativeElement.classList.remove('hide')
    }
  }  

  swimBody () {
    if(this.body1.nativeElement.classList.contains('hide')) {
      this.body1.nativeElement.classList.remove('hide')
      this.body2.nativeElement.classList.add('hide')
      this.head1.nativeElement.classList.remove('hide')
      this.head2.nativeElement.classList.add('hide')
    } else {
      this.body1.nativeElement.classList.add('hide')
      this.body2.nativeElement.classList.remove('hide')
      this.head1.nativeElement.classList.add('hide')
      this.head2.nativeElement.classList.remove('hide')
    }
  }

  wave() {
    if(this.path1.nativeElement.classList.contains('right')) {
      this.path1.nativeElement.classList.remove('right')
      this.path2.nativeElement.classList.remove('right')
      this.path3.nativeElement.classList.remove('right')
      this.path4.nativeElement.classList.remove('right')
    } else {
      this.path1.nativeElement.classList.add('right')
      this.path2.nativeElement.classList.add('right')
      this.path3.nativeElement.classList.add('right')
      this.path4.nativeElement.classList.add('right')
    }
  }
}
