import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from "./core/components/welcome/welcome.component";
import {DashComponent} from "./core/components/dash/dash.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {EnigmaComponent} from "./core/components/enigma/enigma.component";
import {OneComponent} from "./core/components/enigma/one/one.component";
import {TwoComponent} from "./core/components/enigma/two/two.component";
import {ThreeComponent} from "./core/components/enigma/three/three.component";
import {FourComponent} from "./core/components/enigma/four/four.component";
import {canActivate} from "./shared/guards/enigma.guard";
import {MyContactComponent} from "./core/components/my-contact/my-contact.component";

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent,
    data: {animation: 'WelcomePage'}
  },
  {
    path: "dash",
    component: DashComponent,
    data: {animation: 'DashPage'}
  },
  {
    path: "my-contact",
    component: MyContactComponent,
    canActivate: [canActivate],
    data: {animation: 'MyContactPage'}
  },
  {
    path: "enigma",
    component: EnigmaComponent,
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
