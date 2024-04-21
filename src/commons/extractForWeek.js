import { getKoreanDayOfWeek } from "./dayOfWeek";
import formatDateYYYYMMDD from "./formatDate";
import jumpDate from "./jumpDate";

function getDates(date, period = 0) {
    return [...Array(Math.abs(period))].map((_, i) => (period > 0 ? i : -i)).map(jumpDate(date));
}

function extractForWeek(data, pivotDate, period = -7) {
    const parser = (acc, { date, rate = 0 }) => ({ ...acc, [getKoreanDayOfWeek(date)]: { rate, date } });
    const isIn = (v) => (a, b) => a < b ? a <= v && v <= b : b <= v && v <= a;

    const dates = getDates(pivotDate, period);
    const firstday = formatDateYYYYMMDD(dates[0]);
    const lastday = formatDateYYYYMMDD(dates[dates.length - 1]);

    const initial = dates
        .map(formatDateYYYYMMDD)
        .map((date) => ({ date }))
        .reduce(parser, {});

    const extractedData = data?.filter(({ date }) => isIn(date)(firstday, lastday)).reduce(parser, initial);
    const week = dates.map(getKoreanDayOfWeek);

    return { extractedData, week };
}

export default extractForWeek;
