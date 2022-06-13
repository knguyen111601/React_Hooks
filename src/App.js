import { Link } from "react-router-dom";
import Main from "./pages/Main"
import { useLocation } from "react-router";

function App() {
  let location = useLocation()
  return (
    <div className="App">
      {location.pathname !== "/" ? <Link to="/">Go Home</Link> : null}
      <Main/>
    </div>
  );
}

export default App;
