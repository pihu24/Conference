import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css';
import About from "./components/About/About";
import Sponsors from "./components/Sponsors/Sponsors";
import Ann from './components/ANN/Ann';
import Dates from './components/Dates/Dates';


function App() {
  return (
   <div className="App">

      <div>
        <div className="white-gradient" />
      <Header/>
      <Hero/>
      </div>
      <About/>
      <Sponsors/>
      <Ann/>
      <Dates/>
    
      

    </div>
  );
}

export default App;
