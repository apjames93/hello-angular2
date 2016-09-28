//this is app entry pointand modules needed to run a angular2 app
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';

@NgModule({
  imports: [
     BrowserModule ,
     FormsModule
   ],
  declarations: [
     AppComponent
    ],
  bootstrap:    [
    AppComponent
   ]

})
export class AppModule { }
