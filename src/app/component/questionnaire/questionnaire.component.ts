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
  questionnaire    = {'kind':'select'};
  answer      = {};
  config      = {};

  constructor() { }

  ngOnInit() {
  }
  
  addQuestion(){
    if(this.validQuestionnaire()){
      
      console.log( (Object.keys(this.answer).length) );
      let i;
      this.questionnaire['options'] = [];
      for (i = 1; i <= Object.keys(this.answer).length; i++) {
        this.questionnaire['options'].push({
          value: i, text: this.answer[i]
        });
        console.log(this.questionnaire);
      }
      this.updateDecisionConfig();
      this.questionnaire    = {'kind':'select'};
      this.answer = {}
    }
  }

  validQuestionnaire(): boolean{
    // all parts of question should exist
    if(!this.questionnaire['key']){
      alert("enter question key")
      return false;
    } 
    if (!this.questionnaire['title'] ){
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

    if(!!this.questionnaire['key']){
      // KEY MUST
        // cannot contain spaces
        // must be all lowercase
    }
    
    return true;
  }

  updateDecisionConfig(){
    if(!this.config['questions']){
      this.config['questions'] = []
    }
    this.config['questions'].push(this.questionnaire);
    this.updateConfig.emit(this.config);
  }

}
