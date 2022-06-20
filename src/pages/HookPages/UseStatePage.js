import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const UseStatePage = () => {
    let location = useLocation()
    return <>
        {location.pathname !== "/" ? <Link to="/">Go Home</Link> : null}
        <h1 class="display-1">useState</h1>
        <p class="lead">
            The React <span style={{color:"red"}}>useState</span> Hook allows us to track state in a function component.
        </p>
        <dt class="col-sm-3">State</dt>
        <dd class="col-sm-9">
            <p>Refers to data or properties that need to be tracked in an application</p>
        </dd>

        

    </>
}

export default UseStatePage
