import { Component } from '@angular/core';
import { MessagesComponent }  from './messages.component'
import  { NewMessageComponent } from './new-component.component'
@Component({
  selector: 'app-root',
  template: '<h1>Message board</h1><new-messages></new-messages><messages></messages>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
