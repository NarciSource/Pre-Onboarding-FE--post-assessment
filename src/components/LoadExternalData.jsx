import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setRating, setWeek } from "../redux/slices/weeklyBio";

import getHistory from "../network/getHistory";
import extractForWeek from "../commons/extractForWeek";

function LoadExternalData({ date, period }) {
    const dispatch = useDispatch();
    const [externalData, setExternalData] = useState(null);

    useEffect(() => {
        (async () => setExternalData(await getHistory()))();
    }, []);

    useEffect(() => {
        const { extractedData, week } = extractForWeek(externalData, date, period);

        dispatch(setWeek(week));

        extractedData && Object.entries(extractedData).forEach(([day, { rate, date }]) => dispatch(setRating({ day, rating: rate, date })));
    }, [date, period, externalData, dispatch]);

    return null;
}

export default LoadExternalData;
