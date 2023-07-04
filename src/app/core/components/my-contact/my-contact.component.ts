import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-contact',
  templateUrl: './my-contact.component.html',
  styleUrls: ['./my-contact.component.scss']
})
export class MyContactComponent implements OnInit{
  loading: boolean = true

  constructor(private router: Router) {
  }
  ngOnInit() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }

  goTo(){
    this.router.navigate(['dash']);
  }
}
