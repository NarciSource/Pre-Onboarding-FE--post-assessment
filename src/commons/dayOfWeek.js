const defaultWeek = ["일", "월", "화", "수", "목", "금", "토"];

const getKoreanDayOfWeek = (date) => defaultWeek[new Date(date).getDay()];
const shiftWeekByDayOfWeek = (dayOfWeek) => [...defaultWeek.slice(dayOfWeek), ...defaultWeek.slice(0, dayOfWeek)];

export { defaultWeek, getKoreanDayOfWeek, shiftWeekByDayOfWeek };
