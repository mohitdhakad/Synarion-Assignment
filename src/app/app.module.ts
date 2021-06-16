import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SetintervalComponent} from './Timer/setinterval'
import {SettimeoutComponent} from './Timer/settimeout'

@NgModule({
  declarations: [
    AppComponent,
    SetintervalComponent,
    SettimeoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
