import { useReducer } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import RatingItem from "../components/RatingItem";
import LoadExternalData from "../components/LoadExternalData";
import jumpDate from "../commons/jumpDate";

import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function WeekPage() {
    const { week, bio } = useSelector((state) => state.weeklyBio);

    const displayedDateCount = -7;
    const [pivotDate, piovtDateDispatch] = useReducer((state, action) => {
        const jumpDateIn = jumpDate(state);
        switch (action.type) {
            case "Previous-Week":
                return jumpDateIn(-Math.abs(displayedDateCount));
            case "Next-Week":
                return jumpDateIn(Math.abs(displayedDateCount));
            default:
                return state;
        }
    }, new Date());

    return (
        <WeekDiv>
            <LoadExternalData pivotDate={pivotDate} period={displayedDateCount} />

            <div className="arrows">
                <FontAwesomeIcon className="button" icon={faArrowLeft} onClick={() => piovtDateDispatch({ type: "Previous-Week" })} />
                <h1>
                    <small>{bio[week[0]].date}</small>
                    일주일 컨디션
                </h1>
                <FontAwesomeIcon className="button" icon={faArrowRight} onClick={() => piovtDateDispatch({ type: "Next-Week" })} />
            </div>
            <ul>
                {week.map((day, idx) => (
                    <li key={idx}>
                        <RatingItem day={day} date={bio[day].date} rating={bio[day].rating} />
                        <Link className="button" to={`/thisWeek/${day}`} state={{ date: bio[day].date }}>
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
