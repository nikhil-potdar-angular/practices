import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
@Component({
  selector: 'app-replay-sub',
  templateUrl: './replay-sub.component.html',
  styleUrls: ['./replay-sub.component.scss'],
})
export class ReplaySubComponent implements OnInit {

  constructor(private service: AppService) { }

  userList1: any = [
    'Angular 1',
    'Angular 2'
  ]
  userList2: any = []
  userList3: any = []
  subscribeMode2: boolean = false
  subscribeMode3:boolean=false
  subscription2: any = Subscription
  subscription3:any=Subscription
  methodInterval:boolean=false
  intSubscription:any=Subscription

  ngOnInit(): void {
    this.service.videoEmit.subscribe((data) => {
      console.log(data)
      this.userList1.push(data)
    })
  }
  addvideos(video: any) {
    console.log(video)
    this.service.videoEmit.next(video)
  }
  onUser2Click() {
    if (this.subscribeMode2) {
        this.subscription2.unsubscribe()
    }
    else {
      this.subscription2=this.service.videoEmit.subscribe((res) => {
        this.userList2.push(res)
      })
    }

    this.subscribeMode2=!this.subscribeMode2
  }
  onUser3Click() {
    if (this.subscribeMode3) {
      this.subscription3.unsubscribe()
    }
    else {
    this.subscription3=this.service.videoEmit.subscribe((res) => {
      this.userList3.push(res)
     })
    }
    this.subscribeMode3=!this.subscribeMode3
  }
  toggle() {
    const broadCastVideos = interval(1000)
    if (!this.methodInterval) {
      this.intSubscription= broadCastVideos.subscribe((res) => {
        this.service.videoEmit.next("video "+res)
      })
    }
    else {
       this.intSubscription.unsubscribe()
    }
    this.methodInterval=!this.methodInterval
  }
}
