import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatForm } from '../models/chat-form';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'https://api.example.com/send-form';

  constructor(private http: HttpClient) { }

  sendFormData(data: ChatForm): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}