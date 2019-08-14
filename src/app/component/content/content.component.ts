import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContentTaskConfig, Content, Frame, External, Trivia, CONTENT_SUB_TYPES } from '../../models/navigator';

@Component({
  selector: 'content-config',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  /*
  BLURB    = 'BLURB',
  FRAME    = 'FRAME',
  EXTERNAL = 'EXTERNAL',
  TRIVIA   = 'TRIVIA'
*/
  
  @Output() updateConfig = new EventEmitter();
  pageType = 'BLURB';
  pageConfig = {};
  config;

  constructor() { }
  ngOnInit() { }

  addPage(){
    // if(!this.pageDefined())
    //   return;
    if(!this.config){
      this.config = {'pages':[]}; 
      this.appendPage();
    }else{
      // if(!this.config['pages'].includes(this.pageConfig)){
        this.appendPage()
      // }else {
        // alert("duplicate content detected");
      // }
    } 
  }

  appendPage(){
    // const page = this.validatePage();
    const page = this.pageConfig;
    if(page !== null){
      this.config['pages'].push(page);
      this.updateConfig.emit(this.config);
      this.pageConfig = {};
    }
  }
  
  clear() {
    this.config = undefined;
    this.pageConfig = {};
  }

  blurbExists(): boolean{
    return !!this.pageConfig['content'];
  }
  urlExists(): boolean{
    return !!this.pageConfig['url'];
  }
  questionsExist(): boolean{
    return !!this.pageConfig['question'];
  }

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

  quillConfig={
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    //     //[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'header': [ 4, 5, 6, false] }],

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
}

type AcceptedType = Content | Frame | External | Trivia;