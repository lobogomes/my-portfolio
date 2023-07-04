import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import { RainbowPreloaderComponent } from './components/rainbow-preloader/rainbow-preloader.component';
import { BongoCatComponent } from './components/bongo-cat/bongo-cat.component';
import { RetroPcComponent } from './components/retro-pc/retro-pc.component';
import { CassetteComponent } from './components/cassette/cassette.component';


@NgModule({
  declarations: [
    RainbowPreloaderComponent,
    BongoCatComponent,
    RetroPcComponent,
    CassetteComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  exports: [
    RainbowPreloaderComponent,
    BongoCatComponent,
    RetroPcComponent,
    CassetteComponent
  ]
})
export class SharedModule { }
