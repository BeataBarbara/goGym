import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-squash',
  templateUrl: './squash.component.svg',
  styleUrls: ['./squash.component.css']
})
export class SquashComponent implements OnInit {
  velocity:any;
  vel: any = 1500;
  velocityBall: string;
  velocityMan: number;

  @ViewChild('pos1') pos1: ElementRef;
  @ViewChild('pos2') pos2: ElementRef;
  @ViewChild('pos3') pos3: ElementRef;
  @ViewChild('motionPath') motionPath: ElementRef;

  ngOnInit() {
    this.setMan(this.vel);
  }

  setMan(velocityMan: number) {
    clearInterval(this.velocity)
    this.velocity = setInterval (() => this.playSquash(),velocityMan) 
  }
  setBall(velocityBall) {
    this.motionPath.nativeElement.setAttribute('dur', velocityBall) 
  }

  playSquash() {
    if (!this.pos1.nativeElement.classList.contains('hide')) {
      this.pos1.nativeElement.classList.add('hide')
      this.pos2.nativeElement.classList.remove('hide')       
    } else if (!this.pos2.nativeElement.classList.contains('hide')) {
      this.pos2.nativeElement.classList.add('hide')
      this.pos3.nativeElement.classList.remove('hide')       
    }  else  {
      this.pos3.nativeElement.classList.add('hide')
      this.pos1.nativeElement.classList.remove('hide')       
    } 
  }

}
