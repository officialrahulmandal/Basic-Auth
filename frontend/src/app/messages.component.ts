import { Component } from  '@angular/core'

@Component({
  selector:'messages',
  template:`this is my custom message <div *ngFor="let message of messages"><mat-card style="margin: 8px">
<mat-card-title>{{message.text}}</mat-card-title> <mat-card-content>by  {{message.owner}}</mat-card-content></mat-card></div>`
})
export class MessagesComponent {
  messages = [{text:'some text', owner:'owner1'},{text:'some text', owner:'owner2'},{text:'some text', owner:'owner3'}]

}
