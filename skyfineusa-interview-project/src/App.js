import './App.css';
import logo from './police-car-stock-photo.jpeg'
import Table from './Table';

function App() {
  return (

    <div className="App">
      <div>
        {/* <img src={logo} alt="police car" height="100%" width="100%" /> */}
      </div>
      <header className="App-header">
        <h1>State Population and DUI Data</h1>
        <h3>Answering the question, where is SkyFineUSA needed most urgently?</h3>
      </header>
      <div className="main">
        <Table />
        <p>
        Population data is from <a href="https://www.infoplease.com/us/states/state-population-by-rank">https://www.infoplease.com/us/states/state-population-by-rank</a>
        </p>
        <p>
        DUI data is from <a href="https://backgroundchecks.org/which-states-have-the-worst-dui-problems.html">https://backgroundchecks.org/which-states-have-the-worst-dui-problems.html</a>
        </p>  
      </div>    
    </div>
  );
}

export default App;
