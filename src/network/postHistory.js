import axios from "axios";

async function postHistory(date, rate) {
    const url = `http://localhost:5001/biological-rhythm`;

    await axios.post(url, {
        date,
        rate,
    });
}

export default postHistory;
