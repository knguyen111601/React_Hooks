import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const UseCallbackPage = () => {
    let location = useLocation()
    return <>
        {location.pathname !== "/" ? <Link to="/">Go Home</Link> : null}
        <h1>useCallback</h1>
    </>
}

export default UseCallbackPage