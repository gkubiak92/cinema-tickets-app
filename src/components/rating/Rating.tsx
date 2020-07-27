import * as React from "react";
import { IRatingProps } from "components/rating/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as starEmpty } from "@fortawesome/free-regular-svg-icons";

const Rating = ({ rating, color = "blue" }: IRatingProps) => {
  const stars = [];
  for (let index = 0; index < 5; index++) {
    if (index < rating) {
      stars.push(<FontAwesomeIcon key={index} icon="star" color={color} />);
    } else {
      stars.push(
        <FontAwesomeIcon key={index} icon={starEmpty} color={color} />
      );
    }
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;
