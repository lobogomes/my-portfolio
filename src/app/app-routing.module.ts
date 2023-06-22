import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./core/components/welcome/welcome.component";
import {DashComponent} from "./core/components/dash/dash.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

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
