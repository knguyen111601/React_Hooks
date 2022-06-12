import { Link } from "react-router-dom";
import Main from "./pages/Main"

function App() {
  return (
    <div className="App">
      <Link to="/">Go Home</Link>
      <Main/>
    </div>
  );
}

export default App;
