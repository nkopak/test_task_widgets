import { ReactNode, createContext, useState } from "react";
import { IReview } from "../interfaces/review";
import { mockedReviewsData } from "../../mock-tool/reviewsData";

interface IReviewContext {
  reviews: IReview[];
}

interface IReviewContextWithSetState extends IReviewContext {
  addReview: (newReview: IReview) => void;
}

const reviewContext: IReviewContextWithSetState = {
  reviews: [],
  addReview: () => {},
};

const defaultReviewState: IReviewContext = {
  reviews: mockedReviewsData,
};

export const ReviewContext = createContext(reviewContext);

export const ReviewProvider = ({ children }: { children: ReactNode }) => {
  const [reviews, setReviews] = useState<IReviewContext>(defaultReviewState);

  const addReview = (newReview: IReview) => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      reviews: [newReview, ...prevReviews.reviews],
    }));
  };

  return (
    <ReviewContext.Provider value={{ ...reviews, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
};
