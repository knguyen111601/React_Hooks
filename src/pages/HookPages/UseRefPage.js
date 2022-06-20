import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const UseRefPage = () => {
    let location = useLocation()
    return <>
        {location.pathname !== "/" ? <Link to="/">Go Home</Link> : null}
        <h1>useRef</h1>
    </>
}

export default UseRefPage
