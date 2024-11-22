"use client";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import CommentsComponent from "./CommentsComponent";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { getReviewsById } from "@/app/redux/features/reviews/reviewAction";
import Loading from "@/app/components/Loading";

const CommentsSection = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, reviews } = useSelector(
    (state: RootState) => state.reviews
  );

  useEffect(() => {
    dispatch(getReviewsById(String(id)));
  }, [id, dispatch]);
  return (
    <div className="flex flex-col gap-4">
      <section>
        <h1 className="text-lg">Comments </h1>
      </section>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="flex flex-wrap gap-2 justify-center">
          {reviews.length < 1 ? (
            <p>Product has not comment yet.</p>
          ) : (
            reviews.map((review) => (
              <CommentsComponent key={review._id} {...review} />
            ))
          )}
        </section>
      )}
    </div>
  );
};
export default CommentsSection;
