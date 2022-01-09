import "./App.css";
import CityForecast from './CityForecast';
import Form from "./Form";
import Footer from "./Footer";
export default function App() {
  return (
    <div className="App">
      <header className="headerInfo" id="header-bar">
        FourSeasons Weather
      </header>
      <Form />
      <CityForecast />

      <Footer />
    </div>
  );
}

