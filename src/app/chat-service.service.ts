import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from "./login";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Login[]> {
    return this.http.get<Login[]>(`${environment.backUrl}/logins`)
  }

 
   
}
