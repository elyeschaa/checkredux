import AddTask from "./components/AddTask";
import Nav from "./components/Nav";
import "./App.css";
import ListTask from "./components/ListTask";

function App() {
  return (
    <div className="App">
      <Nav />
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
