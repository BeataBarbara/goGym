import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.svg',
  styleUrls: ['./run.component.css']
})
export class RunComponent implements OnInit {

  @ViewChild('pos1') pos1: ElementRef;
  @ViewChild('pos2') pos2: ElementRef;
  @ViewChild('pos3') pos3: ElementRef;
  @ViewChild('pos4') pos4: ElementRef;
  @ViewChild('pos5') pos5: ElementRef;
  @ViewChild('motionPath') motionPath: ElementRef;

  set(val:string) {
    this.motionPath.nativeElement.setAttribute('dur', val)
  }

  ngOnInit(): void {
    this.setInt()
  }
setInt() {
    setInterval(() => this.runRun(), 70)
  }
  runRun() {
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
      this.pos1.nativeElement.classList.remove('hide')       
    } 
  } 
}
