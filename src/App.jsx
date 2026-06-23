import './App.css';



import bgimg from './assets/bg.jpeg';
import Map from './compnents/map/map';
import Search from './compnents/search/search';
import Msc from './compnents/msc/msc';
function App() {
  return (
    <>
      <div className="background">
        <img src={bgimg} alt="" />
      </div>

      <Map /> 
      <Search/>
      <Msc/>
    </>
  );
}

export default App;