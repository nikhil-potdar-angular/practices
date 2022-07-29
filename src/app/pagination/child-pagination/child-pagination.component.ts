import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
AppService
@Component({
  selector: 'app-child-pagination',
  templateUrl: './child-pagination.component.html',
  styleUrls: ['./child-pagination.component.scss']
})
export class ChildPaginationComponent implements OnInit {
  pageNo: number = 1
  @Output() newItemEvent = new EventEmitter<Number>();
  constructor(private service:AppService) { }
  ngOnInit(): void {

  }

  prev() {
    this.pageNo -= 1
    this.newItemEvent.emit(this.pageNo);
  }
  next() {
    this.pageNo += 1
    this.newItemEvent.emit(this.pageNo);
  }
  getData() {
        
  }
}
