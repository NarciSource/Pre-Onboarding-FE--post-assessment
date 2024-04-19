import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

function RatingsItem({ dayOfWeek }) {
    const [itemRatings, setItemRatings] = useState(0);

    return (
        <div>
            <div>{dayOfWeek}</div>
            <div>
                {[1, 2, 3, 4, 5].map((rating, idx) => (
                    <FontAwesomeIcon key={idx} icon={rating <= itemRatings ? solidStar : regularStar} onClick={() => setItemRatings(rating)} />
                ))}
            </div>
        </div>
    );
}

export default RatingsItem;
