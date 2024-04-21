import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import RatingsItem from "../components/RatingsItem";
import LoadData from "../components/LoadData";
import { stepDate } from "../commons/filteringForWeek";

import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function WeekPage() {
    const week = useSelector((state) => state.ratings.week);
    const ratingsOfWeek = useSelector((state) => state.ratings.ratingsOfWeek);
    const [date, setDate] = useState(new Date());

    return (
        <WeekDiv>
            <LoadData date={date} />

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
