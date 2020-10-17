import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-volleyball',
  templateUrl: './volleyball.component.svg',
  styleUrls: ['./volleyball.component.css']
})
export class VolleyballComponent implements OnInit {
  velocity =1000;

  @ViewChild('man1') man1: ElementRef;
  @ViewChild('man2') man2: ElementRef;
  ngOnInit() {
    this.setInt(this.velocity)
  }
  
  setInt (vel) {
    setInterval (() => this.playVolleyball(), vel)
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
