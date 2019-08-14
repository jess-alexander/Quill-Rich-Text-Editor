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

  constructor() { }

  ngOnInit() {
  }

  addQuestion(){
    const idx = 1;
    this.answer['value'] = idx;
    this.question['options']
    this.questionArr.push(this.question);
    this.question = {}
  }

}
