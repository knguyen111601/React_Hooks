import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const UseReducerPage = () => {
    let location = useLocation()
    return <>
        {location.pathname !== "/" ? <Link to="/">Go Home</Link> : null}
        <h1>useReducer</h1>
    </>
}

export default UseReducerPage
