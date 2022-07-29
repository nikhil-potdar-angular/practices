import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pageNo:any
  todos: any = []
  allPages: any
  list:any=[]
  @Input() itemsPerPage:any=5
  constructor(private service:AppService) { }

  ngOnInit(): void {
    console.log(this.list)
    this.service.getTodos().subscribe((res:any) => {
      console.log(res)
      let allData = res.length
      this.allPages=allData/this.itemsPerPage
      console.log(this.allPages)
    },
    (error) => {
      console.error(`ERROR: ${error}`);
    })
    this.getData()
  }

  getData() {
    this.service.secureGet(`?_start=${this.pageNo}&_limit=${this.itemsPerPage}`).subscribe((res: any) => {
      this.todos=res
      console.log(this.todos)
    },
    (error) => {
      console.error(`ERROR: ${error}`);
    })
  }
  getPage(event: any) {
    this.pageNo = event
    console.log(this.pageNo)
    this.getData()
  }
  itemPerPage(event: any) {
    this.itemsPerPage = event.target.value
    this.getData()

       console.log(event.target.value)
  }
  trackByFun(item:any) {
    return item.title;
  }
}



