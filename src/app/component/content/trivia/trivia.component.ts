import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {quillConfig} from '../../../models/quillConfig';

@Component({
  selector: 'trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
  @Output() appendQuestion = new EventEmitter();
  quillConfig = quillConfig;
  trivia = {'kind':'select'};
  config = {};
  answer = {};
  correct = '';

  constructor() { }

  ngOnInit() { }

  addTriviaQuestion(){
    this.trivia['options'] = [];
    this.appendAnswers();
    this.updateDecisionConfig();
  }

  appendAnswers(){
    let i;
    for (i = 1; i <= Object.keys(this.answer).length; i++) {
      let answer;
      if( this.correct == ''+i ){
        answer = { value: i, text: this.answer[i], correct: true };
      } else {
        answer = { value: i, text: this.answer[i] };
      }
      this.trivia['options'].push(answer);
    }
  }

  updateDecisionConfig(){
    // TRIVIA ONLY HAS 1 QUESTION
    
    if(this.validConfig()){
      this.config['question'] = this.trivia;
      this.appendQuestion.emit(this.config);
      this.trivia    = {'kind':'select'};
      this.answer = {};
    }
  }

  validConfig():boolean{
    return true;
  }
}
