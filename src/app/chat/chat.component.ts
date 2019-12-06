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
  

  pseudo:string
  logins: Login[] = [];
  channels : Channels[] = [];
  messages : Messages[] = [];

  public href: string = "";

  message : string;
  

  constructor(private chatService: ChatService, public router: Router) { }

  ngOnInit() {
    this.href = this.router.url;


    // var pathname = new URL(this.href).pathname;
    // console.log(pathname);

    var chars =  this.href.split('/');
    
    this.pseudo = chars[2];
    

    this.parseLogins()
    this.getChannels()
    this.getMessages()
    this.checkLogin()


  }

  private checkLogin(){
    let bool = false
    
    
    for (let index = 0; index < this.logins.length; index++) {
      
      if (this.logins[index].pseudo == this.pseudo){
        bool = true
      }
    }
    // if (bool == false){
    //   this.router.navigate([`/login`]);
    // }
    // console.log(this.logins[0].pseudo)
    // console.log(bool)

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
      pseudo : this.pseudo,
      message: this.message
      
    }

    this.chatService.postMessage(messages).subscribe((monMessage : Messages) => {
      this.messages.push(monMessage)
    })
  }
  

  

}
