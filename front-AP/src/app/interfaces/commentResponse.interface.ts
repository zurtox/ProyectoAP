export interface CommentResponse {
  data:  Comment[];
  error: null;
}

export interface Comment {
  id:         number;
  created_at: Date;
  user:       number;
  content:    number;
  rating:     number;
  review:     string;
}
