const formattingDate = (date) =>
    new Date(date)
        .toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        })
        .replaceAll(".", "")
        .replaceAll(" ", "-");

export default formattingDate;
