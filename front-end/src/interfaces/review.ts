export interface IReview {
  id?: number;
  authorName: string;
  email: string;
  phone?: string;
  comment: string;
  rating: number;
  date: Date;
  saveUserInfo: boolean;
}
