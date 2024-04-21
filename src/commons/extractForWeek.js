import { getKoreanDayOfWeek } from "./dayOfWeek";
import formatDateYYYYMMDD from "./formatDate";
import jumpDate from "./jumpDate";

function getWeek(date, period = 0) {
    return [...Array(Math.abs(period))].map((_, i) => (period > 0 ? i : -i)).map(jumpDate(date));
}

function extractForWeek(data, pivotDate, period = -7) {
    const parser = (acc, { date, rate = 0 }) => ({ ...acc, [getKoreanDayOfWeek(date)]: { rate, date } });
    const isIn = (v) => (a, b) => a < b ? a <= v && v <= b : b <= v && v <= a;

    const week = getWeek(pivotDate, period);
    const today = formatDateYYYYMMDD(week[0]);
    const lastday = formatDateYYYYMMDD(week[week.length - 1]);

    const initial = week
        .map(formatDateYYYYMMDD)
        .map((date) => ({ date }))
        .reduce(parser, {});

    return data?.filter(({ date }) => isIn(date)(today, lastday)).reduce(parser, initial);
}

export default extractForWeek;
