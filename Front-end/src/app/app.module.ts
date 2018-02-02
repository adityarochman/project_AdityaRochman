import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailvendorComponent } from './detailvendor/detailvendor.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    LoginComponent,
    RegisterComponent,
    DetailvendorComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, HttpClientModule,
    RouterModule.forRoot([
      { path : "", component : HomeComponent },
      { path : "detail/:id", component : DetailComponent },
      { path : "login", component : LoginComponent },
      { path : "register", component : RegisterComponent },
      { path : "detailvendor/:id", component : DetailvendorComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
