import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const UseEffectPage = () => {
    let location = useLocation()
    return <>
        {location.pathname !== "/" ? <Link to="/">Go Home</Link> : null}
        <h1>useEffect</h1>
    </>
}

export default UseEffectPage
