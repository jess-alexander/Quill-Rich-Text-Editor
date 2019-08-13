import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContentTaskConfig, Content, Frame, External, Trivia } from '../models/navigator';

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
  
  @Output() completeConfig = new EventEmitter();
  pageType = {};
  pageConfig: Content | Frame | External | Trivia;
  
  // pageConfig = { 'type':'BLURB'};
  config: ContentTaskConfig;

  constructor() { }
  ngOnInit() { }

 addPage(){
    if(!this.pageDefined())
      return;
    if(!this.config['pages']){
      this.config['pages'] = []; 
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
    this.config['content'].push(this.pageConfig)
    this.pageConfig = { 'type':''};
  }
  pageDefined(): boolean{
    return this.pageConfig === { 'type':'BLURB'};
  }
  clear(){
    this.config = undefined;
    this.pageConfig = { 'type':'BLURB'};
  }

  addContentPage(content: string){
    console.log(content);
  }
  addFramePage(url:string){
    console.log(url);
  }
  

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