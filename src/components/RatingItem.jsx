import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import NoticeRating from "./modal/NoticeRating";
import styled, { css } from "styled-components";

const RatingItem = forwardRef(({ day, rating, date, editable }, ref) => {
    const [showModal, setShowModal] = useState(false);
    const [shortlyRating, setShortlyRating] = useState(rating);

    useEffect(() => setShortlyRating(rating), [rating]);
    useImperativeHandle(ref, () => ({
        getRating: () => shortlyRating,
    }));

    const handleRatingChange = (editable || undefined) && ((value) => setShortlyRating(value) & setShowModal(true));

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
        <RatingItemDiv title={date} $editable={editable}>
            <div className="day">{day}</div>

            <div className="rating">
                {[1, 2, 3, 4, 5].map((score, idx) => (
                    <FontAwesomeIcon key={idx} icon={score <= shortlyRating ? solidStar : regularStar} onMouseEnter={() => handleRatingChange?.(score)} />
                ))}
            </div>

            {showModal && createPortal(<NoticeRating rating={shortlyRating} onClose={() => setShowModal(false)} />, document.getElementById("app"))}
        </RatingItemDiv>
    );
});

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
    ${(props) =>
        props.$editable &&
        css`
            .rating {
                cursor: pointer;
            }
            .rating:hover {
                color: gold;
            }
        `}
`;

export default RatingItem;
