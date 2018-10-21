import { Component } from  '@angular/core'

@Component({
  selector:'messages',
  template:'this is my custom message <div *ngFor="let message of messages">{{message.text}} by {{message.owner}}</div>'
})
export class MessagesComponent {
  messages = [{text:'some text', owner:'owner1'},{text:'some text', owner:'owner2'},{text:'some text', owner:'owner3'}]

}
