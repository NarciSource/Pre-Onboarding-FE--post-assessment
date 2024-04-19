import { Link } from "react-router-dom";
import RatingsItem from "../components/RatingsItem";
import { useSelector } from "react-redux";

function WeekPage() {
    const daysOfWeek = ["월", "화", "수", "목", "금", "토", "일"];
    const ratingsOfWeek = useSelector((state) => state.ratings.ratingsOfWeek);

    return (
        <div>
            <h1>일주일 컨디션</h1>
            <ul>
                {daysOfWeek.map((dayOfWeek, idx) => (
                    <li key={idx}>
                        <RatingsItem dayOfWeek={dayOfWeek} ratings={ratingsOfWeek[dayOfWeek]} />
                        <div>
                            <Link to={`/thisWeek/${dayOfWeek}`}>수정</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WeekPage;
