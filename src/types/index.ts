export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface EventQuestion {
  id: string;
  question: string;
  type: 'text' | 'number' | 'select';
  options?: string[];
}