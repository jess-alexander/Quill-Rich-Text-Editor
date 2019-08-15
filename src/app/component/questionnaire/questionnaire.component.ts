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
  
  addQuestion(){
    if(this.validQuestion()){
      this.question['options'] = [];
      
  

      this.questionArr.push(this.question);
      this.question = {}
    }
  }

  validQuestion(): boolean{
    // all parts of question should exist
    if(!!this.question['key'] && !!this.question["answer"]){

    }

    if(!!this.question['key']){
      // KEY MUST
        // cannot contain spaces
        // must be all lowercase
    }
    if(!!this.question["answer"]){

    }
    return true;
  }

  updateDecisionConfig(){
    this.config['questions'] = this.questionArr;
    this.updateConfig.emit(this.config);
  }

}
