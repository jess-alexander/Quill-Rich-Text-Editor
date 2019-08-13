import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { QuillModule } from 'ngx-quill';
import {QuillInitializeService} from "./services/quillInitialize.service";
import { ContentComponent } from './content/content.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, QuillModule, CommonModule ],
  declarations: [ AppComponent, HelloComponent, ContentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [QuillInitializeService]
})
export class AppModule { }
