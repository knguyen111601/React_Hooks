import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const UseStatePage = () => {
    let location = useLocation()
    return <>
        {location.pathname !== "/" ? <Link to="/">Go Home</Link> : null}
        <h1>useState</h1>
    </>
}

export default UseStatePage
