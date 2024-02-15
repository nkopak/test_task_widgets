import { ReviewForm } from "./reviews-form/ReviewForm";
import { IReview } from "../../interfaces/review";
import { Review } from "../../widjets/Review";
import { useContext, useState } from "react";
import { ReviewContext } from "../../context/reviewContext";
import { Button } from "primereact/button";

export const Reviews = () => {
  const { reviews } = useContext(ReviewContext);
  const [readAllReviews, setReadAllReviews] = useState(false);

  const handleAllReviewsClick = () => {
    setReadAllReviews(!readAllReviews);
  };

  const displayedReviews = readAllReviews ? reviews : reviews.slice(0, 2);

  return (
    <div className="mx-10 mt-10 bg-slate-200 p-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font text-6xl font-normal my-4">Reviews</h1>
      </div>
      {displayedReviews.map((r: IReview) => (
        <Review reviewData={r} />
      ))}

      <Button
        className="underline uppercase font-semibold"
        onClick={handleAllReviewsClick}
      >
        {readAllReviews ? "Hide reviews" : "Read all reviews"}
      </Button>
      <ReviewForm />
    </div>
  );
};
