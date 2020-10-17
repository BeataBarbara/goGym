import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-squash',
  templateUrl: './squash.component.svg',
  styleUrls: ['./squash.component.css']
})
export class SquashComponent implements OnInit {
  velocity =1500;

  @ViewChild('pos1') pos1: ElementRef;
  @ViewChild('pos2') pos2: ElementRef;
  @ViewChild('pos3') pos3: ElementRef;

  ngOnInit() {
    this.setInt(this.velocity)
  }

  setInt (vel) {
    setInterval (() => this.playSquash(), vel)
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
