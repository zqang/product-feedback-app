export interface FeedbackModel {
  currentUser: User;
  productRequests: Feedback[];
}

export interface User {
  image: string;
  name: string;
  username: string;
}

export interface Feedback {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  upvoted: boolean;
  status: string;
  description: string;
  comments: Comment[];
}

export interface Comment {
  id: number;
  content: string;
  user: User;
  replies: Reply[];
}

export interface Reply {
  content: string;
  replyingTo: string;
  user: User;
}
