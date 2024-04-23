import { useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRating } from "../redux/slices/weeklyBio";
import useReduxState from "../hooks/useReduxState";

import RatingItem from "../components/RatingItem";
import postHistory from "../network/postHistory";

import styled from "styled-components";
function RatingPage() {
    const navigate = useNavigate();
    const { day } = useParams();
    const date = useLocation().state.date;

    const dispatch = useDispatch();
    const [rating] = useReduxState((state) => state.weeklyBio.bio[day].rating);
    const ratingItemRef = useRef();

    return (
        <RatingLayoutDiv>
            <h1>
                <small>{date}</small>
                {day}요일 평점 매기기
            </h1>
            <RatingItem day={day} rating={rating} editable={true} ref={ratingItemRef} />
            <button
                className="button"
                onClick={() => {
                    const ratingForItem = ratingItemRef.current.getRating();
                    dispatch(setRating({ day, rating: ratingForItem }));
                    postHistory(date, ratingForItem);
                    navigate(-1);
                }}
            >
                저장하기
            </button>
        </RatingLayoutDiv>
    );
}

const RatingLayoutDiv = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        display: flex;
        flex-direction: column;

        small {
            font-size: small;
        }
    }
    .button {
        margin: 50% 35%;
    }
`;

export default RatingPage;
