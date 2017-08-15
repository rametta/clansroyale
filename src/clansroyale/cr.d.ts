interface IFirebaseObject {
  $key?: string;
}

export interface IClan extends IFirebaseObject {
  name: string;
  tag: string;
  trophies: number;
  description: string;
  date: string;
  postedByUid: string;
  postedByName: string;
  comments: {[commentId: string]: IComment};
}

export interface IComment extends IFirebaseObject  {
  comment: string;
  date: string;
  uid: string;
  username: string;
}

export interface IProfile extends IFirebaseObject  {
  displayName: string;
  lastUpdate: string;
  name: string;
  nickname: string;
  photo: string;
  uid: string;
  $exists?(): boolean;
}
