import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const UseImperativeHandlePage = () => {
    let location = useLocation()
    return <>
        {location.pathname !== "/" ? <Link to="/">Go Home</Link> : null}
        <h1>useImperativeHandle</h1>
    </>
}

export default UseImperativeHandlePage
