const jumpDate =
    (date) =>
    (step = 0) =>
        new Date(new Date(date).setDate(date.getDate() + step));

export default jumpDate;
