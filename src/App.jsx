import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchForm from "./components/SearchForm";
import Titles from "./components/Titles";
import MyNav from "./components/MyNav";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Titles />
      <SearchForm />
    </div>
  );
}

export default App;
