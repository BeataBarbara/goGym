import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-volleyball',
  templateUrl: './volleyball.component.svg',
  styleUrls: ['./volleyball.component.css']
})
export class VolleyballComponent implements OnInit {
  velocity: any;
  vel: any = 1000;
  velocityBall: string;
  velocityMan: number;
  velocityBallNumb: number;
  currBall: number;
  currMan: number;

  @ViewChild('man1') man1: ElementRef;
  @ViewChild('man2') man2: ElementRef;
  @ViewChild('motionPath') motionPath: ElementRef;

  ngOnInit() {
    this.setMan(this.vel);
  }

  setMan2(vel) {
    setInterval (() => this.playVolleyball(),vel) 

  }

  setMan(velocityMan: number) {
    clearInterval(this.velocity)
    console.log(this.velocity+"aa")
    this.velocity=setInterval (() => this.playVolleyball(),velocityMan) 
    console.log(parseInt(this.velocity))
  }

  setBall(velocityBall) {
    // this.currBall =parseFloat(this.motionPath.nativeElement.getAttribute('dur'))
    // console.log(this.currBall) 
    // velocityBall= `${this.currBall  + parseFloat(velocityBall)}s`
    // console.log(velocityBall)
    this.motionPath.nativeElement.setAttribute('dur', velocityBall) 
  }
  playVolleyball() {
    if (this.man2.nativeElement.classList.contains('hop')) {
      this.man1.nativeElement.classList.add('hop')
      this.man2.nativeElement.classList.remove('hop')             
    } else  {
      this.man2.nativeElement.classList.add('hop')
      this.man1.nativeElement.classList.remove('hop')       
    } 
  }

}
