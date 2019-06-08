import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
@Input()text:string;
@Output()onClick= new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
