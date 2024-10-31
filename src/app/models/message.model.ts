
export interface Message {
    id: number;
    content: string;
    role: 'user' | 'assistant' | 'error';  
    timestamp: Date;
  }