import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContentTaskConfig, Content, Frame, External, Trivia, CONTENT_SUB_TYPES } from '../../models/navigator';
import {quillConfig} from '../../models/quillConfig';

@Component({
  selector: 'content-config',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  @Output() updateConfig  = new EventEmitter();
  quillConfig = quillConfig;
  pageConfig = {'type': 'TRIVIA'};
  config = {};

  constructor() { }
  ngOnInit() { }

  addPage(){
    
    if(!this.config){
      this.config['pages'] = [];
      this.appendPage();
    }else{
      this.appendPage();
    }
  }

  appendPage(){
    if(this.pageConfig !== null){
      this.config['pages'].push(this.pageConfig);
      this.updateConfig.emit(this.config);
      this.pageConfig = {'type': 'TRIVIA'};
    }
  }

  appendQuestion(event){
    console.log(event);
    this.config['pages'].push(event);
    this.updateConfig.emit(this.config);
  }
  
  // blurbExists(): boolean{
  //   return !!this.pageConfig['content'];
  // }
  // urlExists(): boolean{
  //   return !!this.pageConfig['url'];
  // }
  // questionsExist(): boolean{
  //   return !!this.pageConfig['question'];
  // }

  // validatePage(): AcceptedType{
    
  //   if(this.blurbExists() && !this.urlExists() && !this.questionsExist())
  //     { console.log(new Content(this.pageConfig));
  //       return new Content(this.pageConfig);}
    
  //   if(this.blurbExists() && this.urlExists() && !this.questionsExist())
  //     return new External(this.pageConfig);
    
  //   if(!this.blurbExists() && this.urlExists() && !this.questionsExist())
  //     return new Frame(this.pageConfig);
    
  //   // if(!this.blurbExists() && this.urlExists() && this.questionsExist())
  //   //   return new Trivia(this.pageConfig);
  //   alert("check your work, page does not match required type");
  //   return null;
      
  // }

////////////////////////////////////////////////
// QUILL CONFIG AND STUFFS
////////////////////////////////////////////////
  
  // quillConfig={
  //   toolbar: {
  //     container: [
  //       ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  //       // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  //       [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  //   //     //[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  //       [{ 'header': [ 4, 5, 6, false] }],

  //   //     //[{ 'font': [] }],
  //       [{ 'align': ['','center','right']}],
  //       // [{ 'align': []}],
  //       // [{ 'align': ['right']}],

  //       ['clean'],                                         // remove formatting button

  //       ['link'],
  //       ['link', 'image', 'video']  
  //     ],
  //   },
  //   keyboard: {
  //     bindings: {
  //       enter:{
  //         key:13,
  //         handler: (range, context)=>{
  //           console.log("enter");
  //           return true;
  //         }
  //       }
  //     }
  //   }
  // }
}

type AcceptedType = Content | Frame | External | Trivia;