import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss']
})
export class ContentProjectionComponent implements OnInit {
  public salesProducts = [
    { id: 1, name: 'TV', price: 30000 },
    { id:1,name:'Mobile',price:10000 },
    { id:1,name:'Fan',price:5000 }
  ]
  public topProducts = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id:1,name:'headphones',price:1500 },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
