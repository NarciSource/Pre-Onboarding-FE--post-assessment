import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

function RatingsItem({ dayOfWeek, ratings, setRatings }) {
    return (
        <div>
            <div>{dayOfWeek}</div>
            <div>
                {[1, 2, 3, 4, 5].map((rating, idx) => (
                    <FontAwesomeIcon key={idx} icon={rating <= ratings || 0 ? solidStar : regularStar} onClick={() => setRatings?.(rating)} />
                ))}
            </div>
        </div>
    );
}

export default RatingsItem;
