import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import { PreloaderLegoComponent } from './components/preloader-lego/preloader-lego.component';


@NgModule({
  declarations: [
    PreloaderLegoComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  exports: [
    PreloaderLegoComponent
  ]
})
export class SharedModule { }
