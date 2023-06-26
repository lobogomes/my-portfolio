import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./core/components/welcome/welcome.component";
import {DashComponent} from "./core/components/dash/dash.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RainbowPreloaderComponent} from "./shared/components/rainbow-preloader/rainbow-preloader.component";
import {EnigmaComponent} from "./core/components/enigma/enigma.component";
import {OneComponent} from "./core/components/enigma/one/one.component";
import {TwoComponent} from "./core/components/enigma/two/two.component";
import {ThreeComponent} from "./core/components/enigma/three/three.component";
import {FourComponent} from "./core/components/enigma/four/four.component";
import {FinalComponent} from "./core/components/enigma/final/final.component";
import {canActivate} from "./shared/guards/enigma.guard";

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent,
    data: { animation: 'WelcomePage' }
  },
  {
    path: "dash",
    component: DashComponent,
    data: { animation: 'DashPage' }
  },
  {
    path: "enigma",
    component: EnigmaComponent,
    data: { animation: 'EnigmaPage' },
    children: [
      {
        path: "",
        component: OneComponent
      },
      {
        path: "0",
        component: TwoComponent,
        canActivate: [canActivate]
      },
      {
        path: "1",
        component: ThreeComponent,
        canActivate: [canActivate]
      },
      {
        path: "2",
        component: FourComponent,
        canActivate: [canActivate]
      },
      {
        path: "3",
        component: FinalComponent,
        canActivate: [canActivate]
      },

    ]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
