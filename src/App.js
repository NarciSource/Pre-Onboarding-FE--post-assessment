import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { styled } from "styled-components";

function App() {
    return (
        <AppDiv id="app">
            <RouterProvider router={router} />
        </AppDiv>
    );
}

const AppDiv = styled.div`
    position: relative;
    width: 400px;
    height: 400px;
    margin: 20px;
    padding: 50px 20px;
    border: 1px solid black;

    h1 {
        color: goldenrod;
        font-size: 25px;
        text-align: center;
        margin-bottom: 30px;
    }

    .button {
        opacity: 0.8;
        cursor: pointer;
        color: white;
        background: lightcoral;
        padding: 7px 15px;
        border: none;
        border-radius: 5px;
        text-align: center;
        text-decoration-line: none;
        font-size: 15px;
    }
    .button:hover {
        opacity: 1;
    }
`;

export default App;
