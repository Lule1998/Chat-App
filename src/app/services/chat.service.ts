import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { mockResponses } from '../mock/chat-data';
import Fuse from 'fuse.js';

export interface ChatResponse {
  message: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://localhost:5000/api/chat';
  private fuse: Fuse<any>;

  constructor(private http: HttpClient) {
    
    this.fuse = new Fuse(mockResponses, {
      keys: ['question'],
      threshold: 0.4, 
      includeScore: true
    });
  }

  sendMessage(message: string): Observable<ChatResponse> {
    const searchResults = this.fuse.search(message);
    
    let responseMessage: string;
    
    if (searchResults.length > 0 && searchResults[0].score! < 0.4) {
      responseMessage = searchResults[0].item.answer;
    } else {
      responseMessage = "Izvinite, ne razumem to pitanje. Možete li preformulisati?";
    }

    const response: ChatResponse = {
      message: responseMessage,
      status: 'success'
    };

    return of(response).pipe(delay(1000));
  }

  sendMessageToBackend(message: string): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(this.apiUrl, { message });
  }
}