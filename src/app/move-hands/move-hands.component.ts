import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-move-hands',
  templateUrl: './move-hands.component.svg',
  styleUrls: ['./move-hands.component.css']
})
export class MoveHandsComponent implements OnInit {
  @ViewChild('hands') hands: ElementRef;
  @ViewChild('hands2') hands2: ElementRef;
  @ViewChild('circleUpLeft') circleUpLeft: ElementRef;
  @ViewChild('circleDownLeft') circleDownLeft: ElementRef;
  @ViewChild('circleUpRight') circleUpRight: ElementRef;
  @ViewChild('circleDownRight') circleDownRight: ElementRef;

  ngOnInit(): void {
    this.setInt()
  }
  setInt () {
    setInterval (() => this.moveHands(), 150)
  }

  moveHands (){   
      if (this.hands.nativeElement.classList.contains("hide")) {
        this.hands.nativeElement.classList.remove("hide")
        this.circleUpLeft.nativeElement.classList.add("hide")
        this.circleUpRight.nativeElement.classList.remove("hide")
        this.hands2.nativeElement.classList.add("hide")
        this.circleDownLeft.nativeElement.classList.remove("hide")
        this.circleDownRight.nativeElement.classList.add("hide")
      } else {
        this.hands.nativeElement.classList.add("hide")
        this.circleUpLeft.nativeElement.classList.remove("hide")
        this.circleUpRight.nativeElement.classList.add("hide")
        this.hands2.nativeElement.classList.remove("hide")
        this.circleDownLeft.nativeElement.classList.add("hide")
        this.circleDownRight.nativeElement.classList.remove("hide")
      }
    }



}
