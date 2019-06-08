import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
isOpen:boolean;
  constructor() {
    this.isOpen=false;
   }

  ngOnInit() {
  }

}
