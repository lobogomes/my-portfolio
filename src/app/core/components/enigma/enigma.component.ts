import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-enigma',
  templateUrl: './enigma.component.html',
  styleUrls: ['./enigma.component.scss']
})
export class EnigmaComponent implements OnInit {

  darkmode: boolean = true;
  ngOnInit() {
    this.darkmode = localStorage.getItem('darkmode') === 'true';
    this.applyTheme()
  }

  toggleDarkMode() {
    this.darkmode = !this.darkmode;
    this.applyTheme()
  }

  applyTheme() {
    if(this.darkmode){
      document.body.classList.add('dark-theme')
      localStorage.setItem('darkmode', 'true')
    }else{
      document.body.classList.remove('dark-theme')
      localStorage.setItem('darkmode', 'false')
    }
  }

}
