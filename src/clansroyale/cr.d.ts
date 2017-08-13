export interface IClan {
  name: string;
  tag: string;
  trophies: number;
  description: string;
  date: string;
  postedByUid: string;
  postedByName: string;
  comments: {[commentId: string]: IComment};
  $key?: string;
}

export interface IComment {
  comment: string;
  date: string;
  uid: string;
  username: string;
  $key?: string;
}