import { Component } from '@angular/core';
import {QuillInitializeService} from './services/quillInitialize.service';
import 'quill-mention';
import 'quill-emoji';
import  {TASK_TYPE, CONTENT_SUB_TYPES, ContentTaskConfig,
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
      type: TASK_TYPE.CONTENT,
      config:{},

      journeyTitle: '',
      stageGroupTitle: '',
      stageTitle: '',
      
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

// Task has contents of database item (withholding UUIDs)
class DB_NavigatorTask {
   stageId: string
   priority: number 
   title: string 
   description: string 
   type: TASK_TYPE
   duration: number 
   config?: ContentTaskConfig | QuestionnaireTaskConfig
}

export class NavigatorTask {// extends BaseEntityWithModified {
  friendlyId?: string;
  title?: string;
  description?: string;
  excerpt?: string;
  priority?: number;

  required?: boolean;
  duration?: number;
  type?: TASK_TYPE;
  config?: ContentTaskConfig | QuestionnaireTaskConfig | QuizTaskConfig; // Configuration for the component loaded based on type

  journey?: NavigatorJourney;
  stageGroup?: NavigatorStageGroup;
  stage?: NavigatorStage;

  userStatus?: UserNavigatorStatus;
}