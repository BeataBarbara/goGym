import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-run-run',
  templateUrl: './run-run.component.html',
  styleUrls: ['./run-run.component.css']
})
export class RunRunComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // setInterval(function() {
  //   var pos1 = document.getElementById("pos1");
  //   var pos2 = document.getElementById("pos2");
  //   var pos3 = document.getElementById("pos3");
  //   var pos4 = document.getElementById("pos4");
  //   var pos5 = document.getElementById("pos5");
  //   if (pos1.getAttribute("class") != "hide") {
  //     pos1.classList.add("hide");
  //     pos2.classList.remove("hide");
  //   } else if (pos2.getAttribute("class") != "hide") {
  //     pos2.classList.add("hide");
  //     pos3.classList.remove("hide");
  //   } else if (pos3.getAttribute("class") != "hide") {
  //     pos3.classList.add("hide");
  //     pos4.classList.remove("hide");
  //   } else if (pos4.getAttribute("class") != "hide") {
  //     pos4.classList.add("hide");
  //     pos5.classList.remove("hide");
  //   } else if (pos5.getAttribute("class") != "hide") {
  //     pos5.classList.add("hide");
  //     pos1.classList.remove("hide");
  //   }
  // },70);
}
