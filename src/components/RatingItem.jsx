import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import NoticeRating from "./modal/NoticeRating";
import styled from "styled-components";

function RatingItem({ day, rating, setRating, date }) {
    const [showModal, setShowModal] = useState(false);

    const handleRatingChange = setRating && ((value) => setRating(value) & setShowModal(true));

    useEffect(() => {
        // rating input using number key event
        const handlKeyDown = (event) => {
            if (0 <= event.key && event.key <= 5) {
                handleRatingChange?.(event.key);
            }
        };

        window.addEventListener("keydown", handlKeyDown);
        return () => window.removeEventListener("keydown", handlKeyDown);
    }, []);

    return (
        <RatingItemDiv title={date}>
            <div className="day">{day}</div>

            <div className="rating">
                {[1, 2, 3, 4, 5].map((score, idx) => (
                    <FontAwesomeIcon key={idx} icon={score <= rating ? solidStar : regularStar} onMouseEnter={() => handleRatingChange?.(score)} />
                ))}
            </div>

            {showModal && createPortal(<NoticeRating rating={rating} onClose={() => setShowModal(false)} />, document.getElementById("app"))}
        </RatingItemDiv>
    );
}

const RatingItemDiv = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    font-size: 15px;

    .day {
        color: crimson;
        margin-left: 30px;
    }
    .rating {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 0 30px;
        font-size: xx-large;
        color: wheat;
    }
`;

export default RatingItem;
