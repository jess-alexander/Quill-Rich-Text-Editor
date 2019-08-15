

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
  config = {};
  trivia = {'kind':'select'};
  // answer = {
  //   1:{},
  //   2:{},
  //   3:{},
  //   4:{},
  // };
  answer = {};

  constructor() { }

  ngOnInit() {
  }

  addTriviaQuestion(){

      console.log( (Object.keys(this.answer).length) );
      let i;
      this.trivia['options'] = [];
      for (i = 1; i <= Object.keys(this.answer).length; i++) {
        this.trivia['options'].push({
          value: i, text: this.answer[i].text
        });
      }
      this.updateDecisionConfig();
      this.trivia    = {'kind':'select'};
      // this.answer = {}
  }

  updateDecisionConfig(){
    // DON"T NED THIS BECAUSE TRIVIA ONLY HAS 1 QUESTION
    // if(!this.config['questions']){
    this.config['questions'] = {};
    // }
    this.config['questions'].push(this.trivia);
    this.appendQuestion.emit(this.config);
  }
}