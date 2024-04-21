import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RatingsItem from "../components/RatingsItem";
import { useSelector, useDispatch } from "react-redux";
import { setRatings, setWeek } from "../redux/slices/ratings";
import { styled } from "styled-components";
import getHistory from "../network/getHistory";
import filteringForWeek, { stepDate } from "../commons/filteringForWeek";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function WeekPage() {
    const dispatch = useDispatch();
    const week = useSelector((state) => state.ratings.week);
    const ratingsOfWeek = useSelector((state) => state.ratings.ratingsOfWeek);
    const [history, setHistory] = useState(null);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        (async () => setHistory(await getHistory()))();
    }, []);

    useEffect(() => {
        const thisWeek = filteringForWeek(history, date);

        dispatch(setWeek(date.getDay()));

        thisWeek && Object.entries(thisWeek).forEach(([dayOfWeek, { rate, date }], idx) => dispatch(setRatings({ dayOfWeek, ratings: rate, date })));
    }, [date, history]);

    return (
        <WeekDiv>
            <div className="arrows">
                <FontAwesomeIcon className="button" icon={faArrowLeft} onClick={() => setDate(stepDate(date)(-7))} />
                <h1>
                    <small>{ratingsOfWeek[week[0]].date}</small>
                    일주일 컨디션
                </h1>
                <FontAwesomeIcon className="button" icon={faArrowRight} onClick={() => setDate(stepDate(date)(7))} />
            </div>
            <ul>
                {week.map((dayOfWeek, idx) => (
                    <li key={idx}>
                        <RatingsItem dayOfWeek={dayOfWeek} date={ratingsOfWeek[dayOfWeek].date} ratings={ratingsOfWeek[dayOfWeek].ratings} />
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
    h1 {
        display: flex;
        flex-direction: column;

        small {
            font-size: small;
        }
    }
    ul {
        padding: 0;
        list-style: none;
    }
    li {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
    }

    .arrows {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .button {
            padding: 7px;
            background: goldenrod;
        }
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
