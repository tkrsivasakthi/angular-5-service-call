import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ServercallService } from './servercall.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserdetailComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ServercallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
