import formattingDate from "./formattingDate";

const nextDate = (date, step = 0) => new Date(new Date().setDate(date.getDate() + step));

function filteringForWeek(data, pivotDate) {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

    const today = formattingDate(pivotDate);
    const before7day = formattingDate(nextDate(pivotDate, -7));

    const initial = daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: { rate: 0, date: null } }), {});

    const thisWeekData = data?.filter(({ date }) => before7day <= date && date <= today).reduce((acc, { date, rate }) => ({ ...acc, [daysOfWeek[new Date(date).getDay()]]: { rate, date } }), initial);

    return thisWeekData;
}

export { nextDate };
export default filteringForWeek;
