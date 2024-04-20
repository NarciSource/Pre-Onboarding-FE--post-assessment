import formattingDate from "./formattingDate";

const nextDate = (date, step=0) => new Date(new Date().setDate(date.getDate() + step));

function filteringForWeek(data, pivotDate) {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

    const today = formattingDate(pivotDate);
    const after7day = formattingDate(nextDate(pivotDate, 7));

    const thisWeekData = data?.filter(({ date }) => today <= date && date <= after7day).map(({ date, rate }) => ({ dayOfWeek: daysOfWeek[new Date(date).getDay()], rate }));
    return thisWeekData;
}

export { nextDate };
export default filteringForWeek;
