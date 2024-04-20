import { useEffect } from "react";
import { Link } from "react-router-dom";
import RatingsItem from "../components/RatingsItem";
import { useSelector, useDispatch } from "react-redux";
import { setRatings } from "../redux/slices/ratings";
import { styled } from "styled-components";
import getHistory from "../network/getHistory";
import filteringForWeek from "../commons/filteringForWeek";

function WeekPage() {
    const daysOfWeek = useSelector((state) => state.ratings.daysOfWeek);
    const ratingsOfWeek = useSelector((state) => state.ratings.ratingsOfWeek);

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const thisWeek = filteringForWeek(await getHistory());

            thisWeek.forEach(({ dayOfWeek, rate }) => {
                dispatch(setRatings({ dayOfWeek, ratings: rate }));
            });
        })();
    }, []);

    return (
        <WeekDiv>
            <h1>일주일 컨디션</h1>
            <ul>
                {daysOfWeek.map((dayOfWeek, idx) => (
                    <li key={idx}>
                        <RatingsItem dayOfWeek={dayOfWeek} ratings={ratingsOfWeek[dayOfWeek].ratings} />
                        <Link className="button" to={`/thisWeek/${dayOfWeek}`} state={{ date: ratingsOfWeek[dayOfWeek].date }}>
                            수정
                        </Link>
                    </li>
                ))}
            </ul>
        </WeekDiv>
    );
}

const WeekDiv = styled.div`
    ul {
        padding: 0;
        list-style: none;
    }
    li {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
    }

    .modify-button {
        color: white;
        background: black;
        width: 40px;
        padding: 7px 15px;
        border-radius: 5px;
        text-align: center;
        text-decoration-line: none;
    }
    .button {
        width: 40px;
    }
`;

export default WeekPage;
