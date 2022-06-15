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

        <Link to="/useLayoutEffect">
            <h1>useLayoutEffect Link</h1>
        </Link>

        <Link to="/useImperativeHandle">
            <h1>useImperativeHandle Link</h1>
        </Link>

        <Link to="/useContext">
            <h1>useContext Link</h1>
        </Link>

        <Link to="/useMemo">
            <h1>useMemo Link</h1>
        </Link>

        <Link to="/useCallback">
            <h1>useCallback Link</h1>
        </Link>
    </>
}

export default Home