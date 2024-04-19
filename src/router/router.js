import { createBrowserRouter } from "react-router-dom";
import WeekPage from "../pages/WeekPage";
import RatingsPage from "../pages/RatingsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <WeekPage />,
    },
    {
        path: "/thisWeek/:dayOfWeek",
        element: <RatingsPage />,
    },
]);

export default router;
