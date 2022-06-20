import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const UseMemoPage = () => {
    let location = useLocation()
    return <>
        {location.pathname !== "/" ? <Link to="/">Go Home</Link> : null}
        <h1>useMemo</h1>
    </>
}

export default UseMemoPage
