import "./App.css";
import SearchForm from "./SearchForm";
import Footer from "./Footer";
export default function App() {
  return (
    <div className="App">
      <header className="headerInfo" >
        FourSeasons Weather
      </header>
      < SearchForm defaultCity="edmonton"/>
      <Footer />
    </div>
  );
}

