import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from "./login";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Login[]> {
    return this.http.get<Login[]>(`${environment.backUrl}/todos`)
  }

  addTodo(todo: Login): Observable<Login>{
      return this.http.post<Login>(`${environment.backUrl}/todos`,todo)
    }

  removeTodo(todo : Login): Observable<void>{
    return this.http.delete<void>(`${environment.backUrl}/todos/${todo.id}`)
  }

  updateTodo(todo : Login): Observable<void>{
    return this.http.put<void>(`${environment.backUrl}/todos/${todo.id}`, todo)
  }
   
 

  }
}
