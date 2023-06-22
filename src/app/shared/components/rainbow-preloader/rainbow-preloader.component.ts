import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-rainbow-preloader',
  templateUrl: './rainbow-preloader.component.html',
  styleUrls: ['./rainbow-preloader.component.scss']
})
export class RainbowPreloaderComponent implements OnInit {

  @ViewChild('sky') sky: any;
  @ViewChild('rainbow') rainbow: any;

  ngOnInit() {
  }
}
