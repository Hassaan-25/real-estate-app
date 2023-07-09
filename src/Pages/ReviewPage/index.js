import React from "react";
import "./review.css";
import { reviews } from "./static";
const ReviewPage = () => {
  return (
    <div className="container-fluid bg-dark p-5">
      <h2 className="text-center text-uppercase py-5">Reviews</h2>
      <div className="row">
        {reviews.map((review) => (
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card p-3 bg-dark mb-3" key={review.id}>
              <div className="review-body">
                <h3 className="text-uppercase">{review.name}</h3>
                <p>{review.text}</p>
              </div>
              <div className="card-footer p-0 h-100">
                {Array(review.stars)
                  .fill()
                  .map((_, index) => (
                    <span key={index} className="star-icon primary-color fs-3">
                      &#9733;
                    </span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="w-50 d-block m-auto btn-footer rev-btn btn-lg btn-call-us fw-lighter"
        type="button"
      >
        Leave a Review
      </button>
      <br />
    </div>
  );
};

export default ReviewPage;
