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

  navTaskObject:DB_NavigatorTask;

  quillConfig={
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    //     //[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    //     //[{ 'font': [] }],
        [{ 'align': ['','center','right']}],
        // [{ 'align': []}],
        // [{ 'align': ['right']}],

        ['clean'],                                         // remove formatting button

        ['link'],
        ['link', 'image', 'video']  
      ],
    },
    keyboard: {
      bindings: {
        enter:{
          key:13,
          handler: (range, context)=>{
            console.log("enter");
            return true;
          }
        }
      }
    }
  }

  constructor(
    private quillInitializeService: QuillInitializeService
  ){

  }

  test=(event)=>{
    console.log(event.keyCode);
  }

  onSelectionChanged = (event) =>{
    if(event.oldRange == null){
      this.onFocus();
    }
    if(event.range == null){
      this.onBlur();
    }
  }

  onContentChanged = (event) =>{
    //console.log(event.html);
  }

  onFocus = () =>{
    console.log("On Focus");
  }
  onBlur = () =>{
    console.log("Blurred");
  }
}


// Task has contents of database item (withholding UUIDs)
class DB_NavigatorTask {
   stageId: string
   priority: number 
   title: string 
   excerpt: string 
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