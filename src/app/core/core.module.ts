import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WelcomeComponent} from "./components/welcome/welcome.component";
import { DashComponent } from './components/dash/dash.component';
import {RouterLink} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    WelcomeComponent,
    DashComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    SharedModule,
  ],
  exports: [
    WelcomeComponent,
    DashComponent
  ]
})
export class CoreModule { }
