import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContentTaskConfig, Content, Frame, External, Trivia, CONTENT_SUB_TYPES } from '../../models/navigator';

@Component({
  selector: 'questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  @Output() updateConfig = new EventEmitter();
  // questionArr = [];
  questionnaire    = {};
  answer      = {};
  config      = {};

  constructor() { }

  ngOnInit() {
  }
  
  addQuestion(){
    if(this.validQuestion()){
      // this.question['options'] = [];
      
      // (Object.keys(this.answer).length)
      let i;
      for (i = 1; i < Object.keys(this.answer).length; i++) {
        this.questionnaire['options'].push({
          value: i, text: this.answer[i]
        });
      }

      // this.questionnaire['options'].push(this.questionnaire);
      console.log(this.questionnaire);
      this.questionnaire = {}
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
