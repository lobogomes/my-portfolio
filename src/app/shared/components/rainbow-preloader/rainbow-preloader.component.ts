import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-rainbow-preloader',
  templateUrl: './rainbow-preloader.component.html',
  styleUrls: ['./rainbow-preloader.component.scss']
})
export class RainbowPreloaderComponent implements OnInit {

  loading: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.loading = true
    }, 1500)
  }
}
