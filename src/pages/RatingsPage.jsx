import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRatings } from "../redux/slices/ratings";
import useReduxState from "../hooks/useReduxState";
import RatingsItem from "../components/RatingsItem";
import styled from "styled-components";
import postHistory from "../network/postHistory";

function RatingsPage() {
    const { dayOfWeek } = useParams();
    const navigate = useNavigate();
    const date = useLocation().state.date;

    const dispatch = useDispatch();
    const [shortlyRatings, setShortlyRatings] = useReduxState((state) => state.ratings.ratingsOfWeek[dayOfWeek].ratings);

    return (
        <RatingsLayoutDiv>
            <h1>{dayOfWeek}요일 평점 매기기</h1>
            <RatingsItem dayOfWeek={dayOfWeek} ratings={shortlyRatings} setRatings={setShortlyRatings} />
            <button
                className="button"
                onClick={() => {
                    dispatch(setRatings({ dayOfWeek, ratings: shortlyRatings }));
                    postHistory(date, shortlyRatings);
                    navigate(-1);
                }}
            >
                저장하기
            </button>
        </RatingsLayoutDiv>
    );
}

const RatingsLayoutDiv = styled.div`
    display: flex;
    flex-direction: column;

    .button {
        margin: 50% 35%;
    }
`;

export default RatingsPage;
