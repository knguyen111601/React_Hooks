import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const UseContextPage = () => {
    let location = useLocation()
    return <>
        {location.pathname !== "/" ? <Link to="/">Go Home</Link> : null}
        <h1>useContext</h1>
    </>
}

export default UseContextPage