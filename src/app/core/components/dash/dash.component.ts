import {Component, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit{
  loading: boolean = true;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    setTimeout( () => {
      this.loading = false;
    }, 3000)
  }

  goTo(){
    this.router.navigate(['enigma']);
  }
}
