import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-contact',
  templateUrl: './my-contact.component.html',
  styleUrls: ['./my-contact.component.scss']
})
export class MyContactComponent implements OnInit{
  loading: boolean = true

  ngOnInit() {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  }
}
