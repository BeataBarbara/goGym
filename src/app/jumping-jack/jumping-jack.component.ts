import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-jumping-jack',
  templateUrl: './jumping-jack.component.svg',
  styleUrls: ['./jumping-jack.component.css']
})
export class JumpingJackComponent implements OnInit{
  @ViewChild('man') man: ElementRef;
  @ViewChild('man2') man2: ElementRef;
  @ViewChild('man3') man3: ElementRef;
  @ViewChild('man4') man4: ElementRef;
  
  ngOnInit(): void {
    this.jump()
  }

  jump () {
    setInterval (() => this.jumpingJack(), 200)
  }

jumpingJack() {
  if (!this.man.nativeElement.classList.contains('hide')) {
    this.man.nativeElement.classList.add('hide');
    this.man2.nativeElement.classList.remove('hide');
  } else if (!this.man2.nativeElement.classList.contains('hide')) {
    this.man2.nativeElement.classList.add('hide');
    this.man3.nativeElement.classList.remove('hide');
  } else if (!this.man3.nativeElement.classList.contains('hide')) {
    this.man3.nativeElement.classList.add('hide');
    this.man4.nativeElement.classList.remove('hide');
  } else if (!this.man4.nativeElement.classList.contains('hide')) {
    this.man4.nativeElement.classList.add('hide');
    this.man.nativeElement.classList.remove('hide');
  }
}
}
