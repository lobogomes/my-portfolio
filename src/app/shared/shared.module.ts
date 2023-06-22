import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import { RainbowPreloaderComponent } from './components/rainbow-preloader/rainbow-preloader.component';


@NgModule({
  declarations: [
    RainbowPreloaderComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  exports: [
    RainbowPreloaderComponent
  ]
})
export class SharedModule { }
