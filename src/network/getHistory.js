import axios from "axios";

async function getHistory() {
    const url = `http://localhost:5001/biological-rhythm`;

    const response = await axios({
        method: "get",
        url,
    });

    return response.data;
}

export default getHistory;
