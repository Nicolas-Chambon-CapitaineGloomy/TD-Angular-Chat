import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat-service.service';
import { Router } from '@angular/router';
import { Login } from "../login";
import { Messages } from "../messages";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  logins: Login[] = [];

  constructor(private chatService: ChatService, public router: Router) { }

  ngOnInit() {

    this.parseLogins()


  }

  private parseLogins() {
    this.chatService.getUsers().subscribe(
      (logins: Login[]) => this.logins = logins
      )
  }

  

}
