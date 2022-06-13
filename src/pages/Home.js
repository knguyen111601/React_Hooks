import { Link } from "react-router-dom"

const Home = () => {
    return <>
        <h1>Home Page</h1>
        <Link to="/useState">
            <h1>useState Link</h1>
        </Link>

        <Link to="/useReducer">
            <h1>useReducer Link</h1>
        </Link>

        <Link to="/useEffect">
            <h1>useEffect Link</h1>
        </Link>

        <Link to="/useRef">
            <h1>useRef Link</h1>
        </Link>
    </>
}

export default Home