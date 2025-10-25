import logo from "./logo.svg";
import "./App.css";
import WhackAMole from "./components/WhackAMole";

function App() {
  return (
    <div className="App">
      <WhackAMole rows={3} columns={3} delay={5000} />
    </div>
  );
}

export default App;
