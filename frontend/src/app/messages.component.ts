import { Component } from  '@angular/core'
import { WebService } from './web.service'

@Component({
  selector:'messages',
  template:`this is my custom message <div *ngFor="let message of messages"><mat-card class="card">
<mat-card-title>{{message.text}}</mat-card-title> <mat-card-content>by  {{message.owner}}</mat-card-content></mat-card></div>`
})
export class MessagesComponent {
  constructor(private webService: WebService) { }
  async ngOnInit(){
    var response = await this.webService.getMessages();
    this.messages = response.json();
  }
  messages = []

}
