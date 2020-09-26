import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hop-hop',
  templateUrl: './hop-hop.component.svg',
  styleUrls: ['./hop-hop.component.css']
})
export class HopHopComponent  {
  @ViewChild('man') man: ElementRef;

  hophop () {
        if (this.man.nativeElement.classList.contains("hopHop")) {
          this.man.nativeElement.classList.remove("hopHop")
          } else {  
          this.man.nativeElement.classList.add("hopHop")}
  } 
}
