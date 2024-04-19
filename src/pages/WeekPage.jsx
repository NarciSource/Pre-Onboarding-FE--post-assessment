import { Link } from "react-router-dom";
import RatingsItem from "../components/RatingsItem";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

function WeekPage() {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const todayOfWeek = new Date().getDay();
    const ratingsOfWeek = useSelector((state) => state.ratings.ratingsOfWeek);

    return (
        <WeekDiv>
            <h1>일주일 컨디션</h1>
            <ul>
                {[...daysOfWeek.slice(todayOfWeek), ...daysOfWeek.slice(0, todayOfWeek)].map((dayOfWeek, idx) => (
                    <li key={idx}>
                        <RatingsItem dayOfWeek={dayOfWeek} ratings={ratingsOfWeek[dayOfWeek]} />
                        <Link className="button" to={`/thisWeek/${dayOfWeek}`}>
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
