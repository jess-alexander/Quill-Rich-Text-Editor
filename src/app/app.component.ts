import { Component } from '@angular/core';
import {QuillInitializeService} from './services/quillInitialize.service';
import 'quill-mention';
import 'quill-emoji';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  htmlText ="<p>Testing</p>"
  hasFocus = false;

  atValues = [
    { id: 1, value: 'Fredrik Sundqvist', link: 'https://google.com' },
    { id: 2, value: 'Patrik Sjölin' }
  ];
  hashValues = [
    { id: 3, value: 'Fredrik Sundqvist 2' },
    { id: 4, value: 'Patrik Sjölin 2' }
  ]

  quillConfig={
    // toolbar: '.toolbar',
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    //     ['code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    //     //[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    //     //[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    //     //[{ 'direction': 'rtl' }],                         // text direction

    //     //[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    //     //[{ 'font': [] }],
    //     //[{ 'align': [] }],

        ['clean'],                                         // remove formatting button

    //     ['link'],
    //     //['link', 'image', 'video']  
    //     ['emoji'], 
      ],
    //   handlers: {'emoji': function() {}}
    },
    autoLink: true,

    mention: {
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      // mentionDenotationChars: ["@", "#"],
      source: (searchTerm, renderList, mentionChar) => {
        let values;

        if (mentionChar === "@") {
          values = this.atValues;
        } else {
          values = this.hashValues;
        }
        
        if (searchTerm.length === 0) {
          renderList(values, searchTerm);
        } else {
          const matches = [];
          for (var i = 0; i < values.length; i++)
            if (~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())) matches.push(values[i]);
          renderList(matches, searchTerm);
        }
      },
    },
    "emoji-toolbar": true,
    "emoji-textarea": false,
    "emoji-shortname": true,
    keyboard: {
      bindings: {
        // shiftEnter: {
        //   key: 13,
        //   shiftKey: true,
        //   handler: (range, context) => {
        //     // Handle shift+enter
        //     console.log("shift+enter")
        //   }
        // },
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

// NavTask has contents of database item (withholding UUIDs)
class NavTask {
   stageId: string
   priority: number 
   title: string 
   excerpt: string 
   description: string 
   type: NavTaskType 
   duration: number 
  config?: Array<ContentTask> | QuestionnaireTask
}

class ContentTask{
  type: ContentSubTypes;
}
class Frame extends ContentTask{
  type: ContentSubTypes.FRAME
  url: string
}
class External extends ContentTask{ // potential for validating further
  type: ContentSubTypes.EXTERNAL | ContentSubTypes.BLURB
  url?: string
  richText?: string
}
class Trivia extends ContentTask{
  type: ContentSubTypes.EXTERNAL | ContentSubTypes.TRIVIA
  url?: string
  richText?: string
  question?: Question
}
class Question {
    key: string;
    title: string;
    options: Option[];
    description?: string;
    kind?: string;
    iconPosition?: string;
    columns?: number;
    multi?: boolean;
}
class Option {
    value: string;
    text: string;
    correct?: boolean;
}
enum NavTaskType {
  CONTENT,
  // QUIZ,
  QUESTIONNAIRE,
  BG_OCCUPATION_ANALYSIS
}
enum ContentSubTypes{
  BLURB,
  EXTERNAL,
  FRAME,
  TRIVIA,
}
class QuestionnaireTask{
  questions: Array<Question>
}
