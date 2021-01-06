import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PonserComponent } from './ponser/ponser.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter';

@NgModule({
  declarations: [
    AppComponent,
    PonserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
