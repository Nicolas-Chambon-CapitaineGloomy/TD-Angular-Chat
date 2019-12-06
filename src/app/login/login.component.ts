import { Component, OnInit } from '@angular/core';
import { Login } from "../login";
import { ChatService } from '../chat-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {



  logins: Login[] = [];
  
  pseudoForLogin : string;

  constructor(private chatService: ChatService, public router: Router) { }

  ngOnInit() {


    this.parseLogins()


  }

  private parseLogins() {
    this.chatService.getUsers().subscribe(
      (logins: Login[]) => this.logins = logins
      )
      
  }

  private checkLogin(){
    
    let bool = false
    console.log(this.logins)
    
    for (let index = 0; index < this.logins.length; index++) {
      
      if (this.logins[index].pseudo == this.pseudoForLogin){
        this.router.navigate([`/chat/${this.pseudoForLogin}`]);
      }
    }



  }


}
