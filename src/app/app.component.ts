import { Component } from '@angular/core';
import {QuillInitializeService} from './services/quillInitialize.service';
import 'quill-mention';
import 'quill-emoji';
import  {TASK_TYPE, CONTENT_SUB_TYPES, ContentTaskConfig, NavigatorTask,
         QuestionnaireTaskConfig
         } from './models';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  TaskType = TASK_TYPE;

  ContentSubType = CONTENT_SUB_TYPES;

  navTaskObject: NavigatorTask = {
      title: ''  ,
      description: '',
      priority: 0,
      duration: 0,
      type: TASK_TYPE.QUESTIONNAIRE,

      journeyTitle: '',
      stageGroupTitle: '',
      stageTitle: '',
      
      config: undefined,
  };

  /*
  title?: string;
  description?: string;
  priority?: number;

  required?: boolean;
  duration?: number;
  type?: TASK_TYPE;
  config?: ContentTaskConfig | QuestionnaireTaskConfig | QuizTaskConfig; // Configuration for the component loaded based on type

  journey?: NavigatorJourney;
  stageGroup?: NavigatorStageGroup;
  stage?: NavigatorStage;
  */

  constructor(
    private quillInitializeService: QuillInitializeService
  ){}

  resetConfig(){
    this.navTaskObject['config'] = undefined;    
  }
  updateTaskObject(event){
    // console.log(event);
    this.navTaskObject['config'] = event;
  }

}
