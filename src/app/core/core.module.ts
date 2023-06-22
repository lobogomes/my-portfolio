import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WelcomeComponent} from "./components/welcome/welcome.component";
import { DashComponent } from './components/dash/dash.component';
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    WelcomeComponent,
    DashComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
  ],
  exports: [
    WelcomeComponent,
    DashComponent
  ]
})
export class CoreModule { }
