function filteringForWeek(data) {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

    const formatted = (date) =>
        new Date(date)
            .toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            })
            .replaceAll(".", "")
            .replaceAll(" ", "-");

    const today = formatted(new Date());
    const after7day = formatted(new Date(new Date().setDate(new Date().getDate() + 7)));

    const thisWeekData = data.filter(({ date }) => today <= date && date <= after7day).map(({ date, rate }) => ({ dayOfWeek: daysOfWeek[new Date(date).getDay()], rate }));
    return thisWeekData;
}

export default filteringForWeek;
