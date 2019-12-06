import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat-service.service';
import { Router } from '@angular/router';
import { Login } from "../login";
import { Messages } from "../messages";
import { Channels } from "../channels";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  logins: Login[] = [];
  channels : Channels[] = [];
  messages : Messages[] = [];

  message : string;
  

  constructor(private chatService: ChatService, public router: Router) { }

  ngOnInit() {

    this.parseLogins()
    this.getChannels()
    this.getMessages()


  }

  private parseLogins() {
    this.chatService.getUsers().subscribe(
      (logins: Login[]) => this.logins = logins
      )
  }

  private getChannels() {
    this.chatService.getChannels().subscribe(
      (channels: Channels[]) => this.channels = channels
      )
  }

  private getMessages() {
    this.chatService.getMessages().subscribe(
      (messages: Messages[]) => this.messages = messages
      )
  }


  sendMessage() {

    const messages: Messages = {
      // j'ai pas le temps de faire la verif et de recup le pseudo en 4h
      pseudo : "UnPseudo",
      message: this.message
      
    }

    this.chatService.postMessage(messages).subscribe((monMessage : Messages) => {
      this.messages.push(monMessage)
    })
  }
  

  

}
