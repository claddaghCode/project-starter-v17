import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConverterContainerComponent } from "./containers/converter/converter.component";


@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ConverterContainerComponent],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}


