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
  htmlText ="<p>Testing</p>"
  
  TaskType = TASK_TYPE;

  ContentSubType = CONTENT_SUB_TYPES;

  navTaskObject:DB_NavigatorTask = {
      stageId: '',
      priority: 0,
      title: ''  ,
      description: '',
      type: null,
      duration: 0
  };

 
  constructor(
    private quillInitializeService: QuillInitializeService
  ){

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

// class ContentTaskConfig{
//   content: ContentTaskPageConfig[];
// }
// enum CONTENT_SUB_TYPES {
//   BLURB    = 'BLURB',
//   FRAME    = 'FRAME',
//   EXTERNAL = 'EXTERNAL',
//   TRIVIA   = 'TRIVIA'
// }
// class ContentTaskPageConfig {
//   type: CONTENT_SUB_TYPES;
// }
// class FrameTaskPage extends ContentTaskPageConfig {
//   type: CONTENT_SUB_TYPES.FRAME
//   url: string
// }
// class ExternalLinkTaskPage extends ContentTaskPageConfig { // potential for validating further
//   type: CONTENT_SUB_TYPES.EXTERNAL
//   url?: string
//   richText?: string
// }
// class TriviaTaskPage extends ContentTaskPageConfig {
//   type: CONTENT_SUB_TYPES.TRIVIA
//   url?: string
//   richText?: string
//   question?: Question
// }

// class Question {
//     key: string;
//     title: string;
//     options: Option[];
//     description?: string;
//     kind?: string;
//     iconPosition?: string;
//     columns?: number;
//     multi?: boolean;
// }
// class Option {
//     value: string;
//     text: string;
//     correct?: boolean;
// }
// class QuestionnaireTaskConfig{
//   questions: Array<Question>
// }