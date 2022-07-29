import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ReplaySubComponent } from './components/replay-sub/replay-sub.component';
import { Form1ArrComponent } from './form1-arr/form1-arr.component';
import { NgSwithComponent } from './components/ng-swith/ng-swith.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ChildComponent } from './contentProjection/child/child.component';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppService } from './services/app.service';
import { HeaderInterceptor } from './services/header.interceptor';
import { PaginationComponent } from './pagination/pagination.component';
import { ChildPaginationComponent } from './pagination/child-pagination/child-pagination.component';
import { BadResponseInterceptor } from './interceptor/badResponse.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ReplaySubComponent,
    Form1ArrComponent,
    NgSwithComponent,
    ContentProjectionComponent,
    ChildComponent,
    InterceptorComponent,
    PaginationComponent,
    ChildPaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppService,
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: BadResponseInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
