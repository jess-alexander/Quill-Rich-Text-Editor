import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContentTaskConfig, Content, Frame, External, Trivia, CONTENT_SUB_TYPES } from '../../models/navigator';

@Component({
  selector: 'questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  @Output() updateConfig = new EventEmitter();
  questionArr = [];
  question = {};
  answer = {};
  config = {};
  indx = 1;

  constructor() { }

  ngOnInit() {
  }

  addOption(){
    if(!!this.answer['text'] && !!this.question['title']){
      this.answer['value'] = this.indx;
      this.question['options'] = this.answer;
      this.indx++;
    }
  }
  
  addQuestion(){
    
    this.question['options']
    this.questionArr.push(this.question);
    this.question = {}
  }

}
