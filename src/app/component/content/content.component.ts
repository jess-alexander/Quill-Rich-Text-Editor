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
  validation = [];
  noUpdate = '';

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
      this.validateAndSendContent(this.pageConfig);
    }else {
      this.validation.push('please enter content');
    }
  }

  appendQuestion(event){
    console.log(event);
    this.validateAndSendContent(event);
  }

  validateAndSendContent(contentPage){
    let valid = true;
    switch(this.pageConfig['type']){
      case 'BLURB':
      case 'EXTERNAL':
        valid = this.checkTextValid(valid);
      case 'FRAME':
      case 'TRIVIA':
    }
    if(valid){
      this.validation = [];
      this.config['pages'].push(contentPage);
      this.updateConfig.emit(this.config);
      this.pageConfig = {};
    } else {
      this.noUpdate = "json not updated";
    }
  }
  
  checkTextValid(validOutside): boolean{
    this.validation = [];
    let valid = validOutside;
    valid = this.validContent('href','Rich text cannot contain embedded links');
    if(valid == false) validOutside = false;
    valid = this.validContent('•','Remove \'•\' and replace with bullets');
    if(valid == false) validOutside = false;
    valid = this.validContent('background-color','Background color detected, please clear formatting');
    if(valid == false) validOutside = false;
    valid = this.validContent('rgb','Text color detected, please clear formatting');
    if(valid == false) validOutside = false;
    this.removeNBSP();
    valid = this.validContent('nbsp','\'&nbsp\' detected, search text below for location')
    if(valid == false) validOutside = false;
    return validOutside;
  }

  validContent(search, errorMessage):boolean{
    let result = this.pageConfig['content'].includes(search);
    if(result){
      this.validation.push(errorMessage);
    }
    return !result;
  }

  removeNBSP(){
    var regex = /&nbsp;/gi;
    this.pageConfig['content'] = this.pageConfig['content'].replace(regex,'');
  }
}