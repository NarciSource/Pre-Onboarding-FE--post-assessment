import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

function RatingsItem({ dayOfWeek, ratings, setRatings }) {
    return (
        <RatingsItemDiv>
            <div className="day">{dayOfWeek}</div>
            <div className="ratings">
                {[1, 2, 3, 4, 5].map((rating, idx) => (
                    <FontAwesomeIcon key={idx} icon={rating <= ratings || 0 ? solidStar : regularStar} onClick={() => setRatings?.(rating)} />
                ))}
            </div>
        </RatingsItemDiv>
    );
}

const RatingsItemDiv = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    font-size: 15px;

    .day {
        margin: 0 30px;
    }
    .ratings {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 0 30px;
        font-size: xx-large;
    }
`;

export default RatingsItem;
