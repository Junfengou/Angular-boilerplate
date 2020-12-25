import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // components live in declarations
    AppComponent
  ],
  imports: [ //All modules must live here
    BrowserModule
  ],
  providers: [], //services 
  bootstrap: [AppComponent] //css
})
export class AppModule { }
