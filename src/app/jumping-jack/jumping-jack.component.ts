import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-jumping-jack',
  templateUrl: './jumping-jack.component.svg',
  styleUrls: ['./jumping-jack.component.css']
})
export class JumpingJackComponent implements OnInit{
  @ViewChild('hands') hands: ElementRef;
  @ViewChild('hands2') hands2: ElementRef;
  @ViewChild('legs') legs: ElementRef;
  @ViewChild('legs2') legs2: ElementRef;
  
  ngOnInit(): void {
    this.jump()
  }
jumpingJack() {
  if (this.hands.nativeElement.classList.contains('hide')) {
    this.hands.nativeElement.classList.remove('hide')
    this.hands2.nativeElement.classList.add('hide')
    this.legs.nativeElement.classList.remove('hide')
    this.legs2.nativeElement.classList.add('hide')
  } else {
    this.hands2.nativeElement.classList.remove('hide')
    this.hands.nativeElement.classList.add('hide')
    this.legs2.nativeElement.classList.remove('hide')
    this.legs.nativeElement.classList.add('hide')
  }
}
jump () {
  setInterval (() => this.jumpingJack(), 200)
}
}
