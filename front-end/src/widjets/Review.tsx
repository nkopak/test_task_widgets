import { FC, useState } from "react";
import { IReview } from "../interfaces/review";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";

interface IProps {
  reviewData: IReview;
}

export const Review: FC<IProps> = ({ reviewData }) => {
  const [readMore, setReadMore] = useState(false);
  const maxCommentLength = 1000;

  const handleReadMoreClick = () => {
    setReadMore(!readMore);
  };

  const displayComment =
    readMore || reviewData.comment.length <= maxCommentLength
      ? reviewData.comment
      : reviewData.comment.substring(0, maxCommentLength) + " . . .";

  return (
    <div>
      <h1 className="text-2xl">{reviewData.authorName}</h1>
      <h4 className="text-slate-500 my-1">
        {new Date(reviewData.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </h4>

      <Rating value={reviewData.rating} readOnly cancel={false} />
      <p className="my-6">{displayComment}</p>
      {reviewData.comment.length > maxCommentLength && (
        <Button
          className="underline uppercase font-semibold"
          onClick={handleReadMoreClick}
        >
          Read {readMore ? "less" : "more"}
        </Button>
      )}
      <div className="h-px w-full bg-gray-400 my-6" />
    </div>
  );
};
