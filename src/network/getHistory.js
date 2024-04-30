import axios from "axios";

async function getHistory({ key, gte = "", lte = "" }) {
    const url = `http://localhost:5001/biological-rhythm?key=${key}&gte=${gte}&lte=${lte}`;

    const response = await axios({
        method: "get",
        url,
    });

    return response.data;
}

export default getHistory;
