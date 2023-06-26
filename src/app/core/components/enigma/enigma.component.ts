import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-enigma',
  templateUrl: './enigma.component.html',
  styleUrls: ['./enigma.component.scss']
})
export class EnigmaComponent implements OnInit {

  darkmode: boolean = true;
  ngOnInit() {
    this.applyTheme()
  }

  toggleDarkMode() {
    this.darkmode = !this.darkmode;
    this.applyTheme()
  }

  applyTheme() {
    if(this.darkmode){
      document.body.classList.add('dark-theme')
    }else{
      document.body.classList.remove('dark-theme')
    }
  }

}
