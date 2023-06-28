import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import { RainbowPreloaderComponent } from './components/rainbow-preloader/rainbow-preloader.component';
import { BongoCatComponent } from './components/bongo-cat/bongo-cat.component';


@NgModule({
  declarations: [
    RainbowPreloaderComponent,
    BongoCatComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  exports: [
    RainbowPreloaderComponent,
    BongoCatComponent
  ]
})
export class SharedModule { }
