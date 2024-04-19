import { Link } from "react-router-dom";
import RatingsItem from "../components/RatingsItem";
import { useSelector } from "react-redux";

function WeekPage() {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const todayOfWeek = new Date().getDay();
    const ratingsOfWeek = useSelector((state) => state.ratings.ratingsOfWeek);

    return (
        <div>
            <h1>일주일 컨디션</h1>
            <ul>
                {[...daysOfWeek.slice(todayOfWeek), ...daysOfWeek.slice(0, todayOfWeek)].map((dayOfWeek, idx) => (
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
