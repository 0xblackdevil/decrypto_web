import Navbar from "./components/navbar";
import Home from "./screens/home";

function App() {
  return (
    <>
      <div className="sticky top-0">
        <Navbar />
      </div>
      <Home />
    </>
  );
}

export default App;
