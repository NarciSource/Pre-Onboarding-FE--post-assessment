import { createBrowserRouter } from "react-router-dom";
import WeekPage from "../pages/WeekPage";
import RatingPage from "../pages/RatingPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <WeekPage />,
    },
    {
        path: "/thisWeek/:day",
        element: <RatingPage />,
    },
]);

export default router;
