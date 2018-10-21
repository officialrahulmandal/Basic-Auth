import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessagesComponent }  from './messages.component'
import { NewMessageComponent } from './new-component.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatCardModule, MatInputModule,MatSnackBarModule,MatToolbarModule} from '@angular/material';
import { WebService } from './web.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    FormsModule,
    HttpModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
