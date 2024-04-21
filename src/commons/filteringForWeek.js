import formattingDate from "./formattingDate";

const stepDate =
    (date) =>
    (step = 0) =>
        new Date(new Date(date).setDate(date.getDate() + step));

function getWeek(date, period = 0) {
    return [...Array(Math.abs(period))].map((_, i) => (period > 0 ? i : -i)).map(stepDate(date));
}

function filteringForWeek(data, pivotDate) {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const formatting = (acc, { date, rate = 0 }) => ({ ...acc, [daysOfWeek[new Date(date).getDay()]]: { rate, date } });
    const isIn = (v) => (a, b) => a < b ? a <= v && v <= b : b <= v && v <= a;

    const period = -7;
    const week = getWeek(pivotDate, period);
    const today = formattingDate(week[0]);
    const lastday = formattingDate(week[week.length - 1]);

    const initial = week
        .map(formattingDate)
        .map((date) => ({ date }))
        .reduce(formatting, {});

    return data?.filter(({ date }) => isIn(date)(today, lastday)).reduce(formatting, initial);
}

export { stepDate };
export default filteringForWeek;
