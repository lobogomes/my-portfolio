import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit{
  loading: boolean = true;

  ngOnInit(): void {
    setTimeout( () => {
      this.loading = false;
    }, 2000)
  }


}
