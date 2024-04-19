import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRatings } from "../redux/slices/ratings";
import useReduxState from "../hooks/useReduxState";
import RatingsItem from "../components/RatingsItem";

function RatingsPage() {
    const { dayOfWeek } = useParams();

    const dispatch = useDispatch();
    const [shortlyRatings, setShortlyRatings] = useReduxState((state) => state.ratings.ratingsOfWeek[dayOfWeek]);

    return (
        <div>
            <h1>{dayOfWeek}요일 평점 매기기</h1>
            <RatingsItem dayOfWeek={dayOfWeek} ratings={shortlyRatings} setRatings={setShortlyRatings} />
            <button onClick={() => dispatch(setRatings({ dayOfWeek, ratings: shortlyRatings }))}>저장하기</button>
        </div>
    );
}

export default RatingsPage;
