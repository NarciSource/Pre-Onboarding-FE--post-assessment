import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRatings, setWeek } from "../redux/slices/ratings";
import { setHistory } from "../redux/slices/history";

import getHistory from "../network/getHistory";
import filteringForWeek from "../commons/filteringForWeek";

function LoadData({ date }) {
    const dispatch = useDispatch();
    const history = useSelector((state) => state.history.history);

    useEffect(() => {
        (async () => dispatch(setHistory(await getHistory())))();
    }, []);

    useEffect(() => {
        const thisWeek = filteringForWeek(history, date);

        dispatch(setWeek(date.getDay()));

        thisWeek && Object.entries(thisWeek).forEach(([dayOfWeek, { rate, date }], idx) => dispatch(setRatings({ dayOfWeek, ratings: rate, date })));
    }, [date, history]);

    return null;
}

export default LoadData;
