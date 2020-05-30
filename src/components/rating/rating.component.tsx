import * as React from 'react';
import { IRatingProps } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as starFilled, faStarHalf as starHalfFilled } from '@fortawesome/free-solid-svg-icons';
import { faStar as starEmpty } from '@fortawesome/free-regular-svg-icons'

const Rating = ({ rating }: IRatingProps) => {
    const stars = [];
    for (let index = 0; index < 5; index++) {
        if (index < rating) {
            stars.push(<FontAwesomeIcon key={index} icon={starFilled} />)
        } else {
            stars.push(<FontAwesomeIcon key={index} icon={starEmpty} />);
        }
    }

    return (
        <div className="rating">
            {stars}
        </div>
    )
};

export default Rating;