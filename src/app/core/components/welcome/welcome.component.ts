import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  hideButton = true;
  typedText = '';
  finalText = 'hello world ! ' +
    'welcome to ~my~ world. here, you will find out my favorites things about ' +
    'development and some things about me too. ' +
    'i build this to have a lot of fun while im programming cool designs. enjoy ! :)';

  ngOnInit() {
    this.startTypingEffect();
  }

  startTypingEffect() {
    const typingInterval = setInterval(() => {
      if (this.typedText === this.finalText) {
        this.hideButton = true
        clearInterval(typingInterval);
        setTimeout(() => {
          //this.typedText = '';
          //this.startTypingEffect();
        }, 2000);
        return;
      }
      this.typedText += this.finalText.charAt(this.typedText.length);
    }, 100);
  }
}
