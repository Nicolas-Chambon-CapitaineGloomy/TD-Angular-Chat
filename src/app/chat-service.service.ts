import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from "./login";
import { Channels } from "./channels";
import { Messages } from "./messages";

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Login[]> {
    return this.http.get<Login[]>(`${environment.backUrl}/logins`)
  }


  getMessages(): Observable<Messages[]> {
    return this.http.get<Messages[]>(`${environment.backUrl}/Messages`)
  }


  getChannels(): Observable<Channels[]> {
    return this.http.get<Channels[]>(`${environment.backUrl}/channels`)
  }

  postMessage(messages: Messages): Observable<Messages>{
    return this.http.post<Messages>(`${environment.backUrl}/messages`,messages)
  }

 
   
}
