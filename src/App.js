import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { styled } from "styled-components";

function App() {
    return (
        <AppDiv>
            <RouterProvider router={router} />
        </AppDiv>
    );
}

const AppDiv = styled.div`
    width: 400px;
    height: 400px;
    margin: 20px;
    padding: 50px 20px;
    border: 1px solid black;

    h1 {
        font-size: 15px;
        font-weight: normal;
        text-align: center;
        margin-bottom: 30px;
    }

    .button {
        cursor: pointer;
        color: white;
        background: black;
        padding: 7px 15px;
        border: none;
        border-radius: 5px;
        text-align: center;
        text-decoration-line: none;
    }
`;

export default App;
