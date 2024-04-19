import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function useReduxState(initialSelector) {
    const reduxState = useSelector(initialSelector);
    const [state, setState] = useState(0);

    useEffect(() => setState(reduxState), [reduxState]);

    return [state, setState];
}

export default useReduxState;
