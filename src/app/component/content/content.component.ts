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
  pageConfig = {};
  config = {'pages': []};

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
      // this.updateConfig.emit(this.config);
      // this.pageConfig = {};
      this.validateAndSendContent();
    }
  }

  appendQuestion(event){
    console.log(event);
    this.config['pages'].push(event);
    this.validateAndSendContent();
  }

  validateAndSendContent(){
    let valid = true;
    switch(this.pageConfig['type']){
      case 'BLURB':
      case 'External':
        valid = this.clearOfEmbeddedLinks();
      case 'FRAME':
      case 'TRIVIA':
    }
    if(valid){
      this.updateConfig.emit(this.config);
      this.pageConfig = {};
    } else {
      
    }
  }
  
  clearOfEmbeddedLinks(): boolean{
    let result = this.pageConfig['content'].includes('href');
    if(result){
      alert('Rich text cannot contain embedded links');
    }
    return !result;

    // return true;
  }
}