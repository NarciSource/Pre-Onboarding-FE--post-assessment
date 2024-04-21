import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setRating, setWeek } from "../redux/slices/weeklyBio";

import getHistory from "../network/getHistory";
import extractForWeek from "../commons/extractForWeek";

function LoadExternalData({ date }) {
    const dispatch = useDispatch();
    const [externalData, setExternalData] = useState(null);

    useEffect(() => {
        (async () => setExternalData(await getHistory()))();
    }, []);

    useEffect(() => {
        const thisWeek = extractForWeek(externalData, date);

        dispatch(setWeek(date.getDay()));

        thisWeek && Object.entries(thisWeek).forEach(([day, { rate, date }]) => dispatch(setRating({ day, rating: rate, date })));
    }, [date, externalData, dispatch]);

    return null;
}

export default LoadExternalData;
