import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRating, setWeek } from "../redux/slices/weeklyBio";

import getHistory from "../network/getHistory";
import fillForWeek from "../commons/fillForWeek";
import jumpDate from "../commons/jumpDate";
import formatDateYYYYMMDD from "../commons/formatDate";

function LoadExternalData({ pivotDate, period }) {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            let gte = formatDateYYYYMMDD(pivotDate);
            let lte = formatDateYYYYMMDD(jumpDate(pivotDate)(period));
            [gte, lte] = gte > lte ? [lte, gte] : [gte, lte];

            const data = await getHistory({ key: "date", gte, lte });
            const { filledData, week } = fillForWeek(data, pivotDate, period);

            dispatch(setWeek(week));
            filledData && Object.entries(filledData).forEach(([day, { rate, date }]) => dispatch(setRating({ day, rating: rate, date })));
        })();
    }, [pivotDate, period, dispatch]);

    return null;
}

export default LoadExternalData;
