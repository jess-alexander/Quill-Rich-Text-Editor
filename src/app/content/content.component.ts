import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContentTaskConfig } from '../models/navigator';

@Component({
  selector: 'content-config',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Output() completeConfig = new EventEmitter();
  pageConfig = { 'type':''};
  config = {};

  constructor() { }
  ngOnInit() { }

 addPage(body: string){
    if(!this.config['content']){
      this.config['content'] = []; 
      this.appendPage(body);
    }else{
      if(!this.config['content'].includes(this.pageConfig)){
        this.appendPage(body)
      }else {
        alert("duplicate content detected");
      }
    } 
  }

  appendPage(body){
    if(!!body){
      this.pageConfig['body'] = body.replace(/'/g, "\'");
    }
    this.config['content'].push(this.pageConfig)
    this.pageConfig = { 'type':''};
  }

  clear(){
    this.config = {};
    this.pageConfig = { 'type':''};
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
}