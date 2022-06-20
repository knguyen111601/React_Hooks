import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const UseLayoutEffectPage = () => {
    let location = useLocation()
    return <>
        {location.pathname !== "/" ? <Link to="/">Go Home</Link> : null}
        <h1>UseLayoutEffect</h1>
    </>
}

export default UseLayoutEffectPage
