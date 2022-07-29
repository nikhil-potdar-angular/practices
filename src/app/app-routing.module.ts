import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { NgSwithComponent } from './components/ng-swith/ng-swith.component';
import { ReplaySubComponent } from './components/replay-sub/replay-sub.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { Form1ArrComponent } from './form1-arr/form1-arr.component';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full' },
  { path:'home',component:HomeComponent },
  { path:'replay-subject',component:ReplaySubComponent },
  { path:'dynamicForm',component:Form1ArrComponent },
  { path:'ngSwitch',component:NgSwithComponent },
  { path: 'ngContent', component: ContentProjectionComponent },
  { path:'interceptor',component:InterceptorComponent },
  { path:'pagination',component:PaginationComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
