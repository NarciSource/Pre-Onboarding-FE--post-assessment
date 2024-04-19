import { useParams } from "react-router-dom";
import RatingsItem from "../components/RatingsItem";

function RatingsPage() {
    const { dayOfWeek } = useParams();

    return (
        <div>
            <h1>{dayOfWeek}요일 평점 매기기</h1>
            <RatingsItem dayOfWeek={dayOfWeek} />
            <button>저장하기</button>
        </div>
    );
}

export default RatingsPage;
