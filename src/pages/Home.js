import { Link } from "react-router-dom"

const Home = () => {
    return <div style={{width:"80%", margin:"auto"}}>

        <div class="card" style={{width: "80%", margin:"auto", marginTop:"10px"}}>
        <div class="card-body">
            <h5 class="card-title">useState</h5>
            <p class="card-text">Manage state of your blah blah blah</p>
            <Link to="/useState" class="btn btn-primary">View</Link>
        </div>
        </div>

        <div class="card" style={{width: "80%", margin:"auto", marginTop:"10px"}}>
        <div class="card-body">
            <h5 class="card-title">useReducer</h5>
            <p class="card-text">Manage state of your blah blah blah</p>
            <Link to="/useReducer" class="btn btn-primary">View</Link>
        </div>
        </div>

        <div class="card" style={{width: "80%", margin:"auto", marginTop:"10px"}}>
        <div class="card-body">
            <h5 class="card-title">useEffect</h5>
            <p class="card-text">Manage state of your blah blah blah</p>
            <Link to="/useEffect" class="btn btn-primary">View</Link>
        </div>
        </div>

        <div class="card" style={{width: "80%", margin:"auto", marginTop:"10px"}}>
        <div class="card-body">
            <h5 class="card-title">useRef</h5>
            <p class="card-text">Manage state of your blah blah blah</p>
            <Link to="/useRef" class="btn btn-primary">View</Link>
        </div>
        </div>

        <div class="card" style={{width: "80%", margin:"auto", marginTop:"10px"}}>
        <div class="card-body">
            <h5 class="card-title">useLayoutEffect</h5>
            <p class="card-text">Manage state of your blah blah blah</p>
            <Link to="/useLayoutEffect" class="btn btn-primary">View</Link>
        </div>
        </div>

        <div class="card" style={{width: "80%", margin:"auto", marginTop:"10px"}}>
        <div class="card-body">
            <h5 class="card-title">useImperativeHandle</h5>
            <p class="card-text">Manage state of your blah blah blah</p>
            <Link to="/useImperativeHandle" class="btn btn-primary">View</Link>
        </div>
        </div>

        <div class="card" style={{width: "80%", margin:"auto", marginTop:"10px"}}>
        <div class="card-body">
            <h5 class="card-title">useContext</h5>
            <p class="card-text">Manage state of your blah blah blah</p>
            <Link to="/useContext" class="btn btn-primary">View</Link>
        </div>
        </div>

        <div class="card" style={{width: "80%", margin:"auto", marginTop:"10px"}}>
        <div class="card-body">
            <h5 class="card-title">useMemo</h5>
            <p class="card-text">Manage state of your blah blah blah</p>
            <Link to="/useMemo" class="btn btn-primary">View</Link>
        </div>
        </div>

        <div class="card" style={{width: "80%", margin:"auto", marginTop:"10px"}}>
        <div class="card-body">
            <h5 class="card-title">useCallback</h5>
            <p class="card-text">Manage state of your blah blah blah</p>
            <Link to="/useCallback" class="btn btn-primary">View</Link>
        </div>
        </div>
    </div>
}

export default Home