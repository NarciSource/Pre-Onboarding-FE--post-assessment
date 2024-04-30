import { getKoreanDayOfWeek } from "./dayOfWeek";
import formatDateYYYYMMDD from "./formatDate";
import jumpDate from "./jumpDate";

function getDates(date, period = 0) {
    return [...Array(Math.abs(period))].map((_, i) => (period > 0 ? i : -i)).map(jumpDate(date));
}

function fillForWeek(data, pivotDate, period = -7) {
    const parser = (acc, { date, rate = 0 }) => ({ ...acc, [getKoreanDayOfWeek(date)]: { rate, date } });

    const dates = getDates(pivotDate, period);

    const initial = dates
        .map(formatDateYYYYMMDD)
        .map((date) => ({ date }))
        .reduce(parser, {});

    const filledData = data?.reduce(parser, initial);
    const week = dates.map(getKoreanDayOfWeek);

    return { filledData, week };
}

export default fillForWeek;
