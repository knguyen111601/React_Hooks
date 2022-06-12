import { Link } from "react-router-dom"

const Home = () => {
    return <>
        <h1>Home Page</h1>
        <Link to="/useState">
            <h1>useState Link</h1>
        </Link>
    </>
}

export default Home