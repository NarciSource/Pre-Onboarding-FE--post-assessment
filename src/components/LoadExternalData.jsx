import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setRating, setWeek } from "../redux/slices/weeklyBio";

import getHistory from "../network/getHistory";
import extractForWeek from "../commons/extractForWeek";

function LoadExternalData({ pivotDate, period }) {
    const dispatch = useDispatch();
    const [externalData, setExternalData] = useState(null);

    useEffect(() => {
        (async () => setExternalData(await getHistory()))();
    }, []);

    useEffect(() => {
        const { extractedData, week } = extractForWeek(externalData, pivotDate, period);

        dispatch(setWeek(week));

        extractedData && Object.entries(extractedData).forEach(([day, { rate, date }]) => dispatch(setRating({ day, rating: rate, date })));
    }, [pivotDate, period, externalData, dispatch]);

    return null;
}

export default LoadExternalData;
