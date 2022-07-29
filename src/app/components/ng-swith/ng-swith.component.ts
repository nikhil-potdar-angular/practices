import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-swith',
  templateUrl: './ng-swith.component.html',
  styleUrls: ['./ng-swith.component.scss']
})
export class NgSwithComponent implements OnInit {
  value:any
  constructor() { }

  ngOnInit(): void {

  }
  onChange(event:any) {
    console.log(event.target.value)
    this.value=event.target.value
  }
}
