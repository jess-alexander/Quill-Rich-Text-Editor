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
    // all parts of question should exist
    if(!this.trivia['key']){
      alert("enter question key")
      return false;
    } 
    if (!this.trivia['title'] ){
      alert("enter question title")
      return false;
    } 
    if(!this.answer['2']){
      alert("please enter at least two answers");
      return false;
    }
    // if ( Object.keys(this.answer[1]).length >= 2){
    //   alert("please enter at least two answers");
    //   return false;
    // }

    if(!!this.trivia['key']){
      // KEY MUST
        // cannot contain spaces
        // must be all lowercase
    }
    
    return true;
  }
}
