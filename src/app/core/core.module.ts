import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {WelcomeComponent} from "./components/welcome/welcome.component";
import { DashComponent } from './components/dash/dash.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import { EnigmaComponent } from './components/enigma/enigma.component';
import { OneComponent } from './components/enigma/one/one.component';
import { TwoComponent } from './components/enigma/two/two.component';
import { ThreeComponent } from './components/enigma/three/three.component';
import { FourComponent } from './components/enigma/four/four.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MyContactComponent } from './components/my-contact/my-contact.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    DashComponent,
    EnigmaComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    MyContactComponent,
  ],
    imports: [
        CommonModule,
        RouterLink,
        SharedModule,
        RouterOutlet,
        ReactiveFormsModule,
        NgOptimizedImage,
    ],
  exports: [
    WelcomeComponent,
    DashComponent
  ]
})
export class CoreModule { }
