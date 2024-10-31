import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat.service';

interface Message {
  content: string;
  type: 'user' | 'bot' | 'error';
}

@Component({
  selector: 'app-chat',
  standalone: true,  
  imports: [CommonModule, FormsModule],  
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  messages: Message[] = [];
  inputMessage: string = '';
  isLoading: boolean = false;

  constructor(private chatService: ChatService) {}

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputMessage = target.value;
  }

  sendMessage() {
    if (!this.inputMessage.trim()) return;

    const userMessage = this.inputMessage.trim();
    this.messages.push({ type: 'user', content: userMessage });
    this.inputMessage = '';
    this.isLoading = true;

    this.chatService.sendMessage(userMessage).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.messages.push({ type: 'bot', content: response.message });
        }
      },
      error: (error) => {
        console.error('Error:', error);
        this.messages.push({
          type: 'error',
          content: 'Sorry, there was an error processing your message.'
        });
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}