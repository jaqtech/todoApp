import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { LogService } from './service/log.service';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [TodoComponent],
  imports: [ BrowserModule,FormsModule
  ],
  providers: [LogService],
  bootstrap: [TodoComponent]
})
export class AppModule { }
