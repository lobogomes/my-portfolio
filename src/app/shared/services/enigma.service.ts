import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnigmaService {

  answers: boolean[] = [false, false, false, false];
  constructor() {
  }

  verifyAnswer(questionIndex: number): boolean{
    return this.answers[questionIndex];
  }

  answerQuestion(questionIndex: number, rightAnswer: boolean){
    this.answers[questionIndex] = rightAnswer;
  }
}
