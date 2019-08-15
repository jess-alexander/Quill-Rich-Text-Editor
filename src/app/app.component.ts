import { Component } from '@angular/core';
import {QuillInitializeService} from './services/quillInitialize.service';
import  {TASK_TYPE, CONTENT_SUB_TYPES, ContentTaskConfig, NavigatorTask,
         QuestionnaireTaskConfig
         } from './models';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  showJSON = false;

  navTaskObject: NavigatorTask = {
    title: ''  ,
    description: '',
    priority: 0,
    duration: 0,
    type: TASK_TYPE.CONTENT,

    journeyTitle: '',
    stageGroupTitle: '',
    stageTitle: '',
    
    config: undefined,
  };

  constructor(
    private quillInitializeService: QuillInitializeService
  ){}

  resetConfig(){
    this.navTaskObject['config'] = undefined;    
    this.showJSON = false;
  }
  updateTaskObject(event){
    // console.log(event);
    this.navTaskObject['config'] = event;
    this.showJSON = true;
  }

}
