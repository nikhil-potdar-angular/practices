import { Component, OnInit, SimpleChanges } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.scss']
})
export class InterceptorComponent implements OnInit {
  posts: any = []
  todos:any=[]
  constructor(private service:AppService) { }

  ngOnInit(): void {
    this.service.get().subscribe((res:any) => {
      console.log(res)
      this.posts=res
      this.posts= this.posts.filter((item: any) => {
        return item.id >50  && item.id <76
      })
      console.log(this.posts)
    })
    this.service.getTodos().subscribe((res:any) => {
      console.log(res)
      this.todos=res
    })
  }
 

}
