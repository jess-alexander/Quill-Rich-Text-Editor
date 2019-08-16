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
  page = { type: 'TRIVIA', question: {}};
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
    
    if(this.validConfig()){
      this.page['question'] = this.trivia;
      this.appendQuestion.emit(this.page);

      this.page = { type: 'TRIVIA', question: {}};
      this.trivia    = {'kind':'select'};
      this.answer = {};
    }
  }

  validConfig():boolean{
    return true;
  }
}
