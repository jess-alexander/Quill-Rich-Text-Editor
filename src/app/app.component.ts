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
      journeyDescription: '',
      stageGroupTitle: '',
      stageGroupDescription: '',
      stageNum: 0,
      
      config: undefined,
  };

  constructor(private quillInitializeService: QuillInitializeService){}

  resetConfig(){
    this.navTaskObject['config'] = undefined;    
    this.showJSON = false;
  }
  updateTaskObject(event){
    if(this.validObject()){
      this.navTaskObject['config'] = event;
      this.showJSON = true;   
    }
  }
  validObject(){
    if(this.navTaskObject['title'].length >= 55){
      alert('task type too long');
    }
    if(this.navTaskObject['description'].length >= 70){
      alert('task description too long');
    }
    if(this.navTaskObject['stageGroupTitle'].length >= 25){
      alert('stageGroupTitle too long');
    }
    if(this.navTaskObject['stageGroupDescription'].length >= 190){
      alert('stageGroup description too long');
    }
    if(this.navTaskObject['journeyTitle'].length >= 32){
      alert('journey title too long');
    }
    if(this.navTaskObject['journeyDescription'].length >= 190){
      alert('journey description too long');
    }


  }

}
