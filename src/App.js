import "./App.css";
import CityForecast from './CityForecast';
import SearchForm from "./SearchForm";
import Footer from "./Footer";
export default function App() {
  return (
    <div className="App">
      <header className="headerInfo" id="header-bar">
        FourSeasons Weather
      </header>
      < SearchForm defaultCity="edmonton"/>
      <CityForecast />

      <Footer />
    </div>
  );
}

