import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

function RatingsItem({ dayOfWeek, ratings, setRatings }) {
    useEffect(() => {
        // rating input using number key event
        const handlKeyDown = (event) => {
            if (0 <= event.key && event.key <= 5) {
                setRatings?.(event.key);
            }
        };
        window.addEventListener("keydown", handlKeyDown);
        return () => window.removeEventListener("keydown", handlKeyDown);
    }, []);

    return (
        <RatingsItemDiv>
            <div className="day">{dayOfWeek}</div>
            <div className="ratings">
                {[1, 2, 3, 4, 5].map((rating, idx) => (
                    <FontAwesomeIcon key={idx} className="rating" icon={rating <= ratings || 0 ? solidStar : regularStar} onMouseEnter={() => setRatings?.(rating)} />
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
        color: crimson;
        margin-left: 30px;
    }
    .ratings {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 0 30px;
        font-size: xx-large;
        color: wheat;
    }
`;

export default RatingsItem;
