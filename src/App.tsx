import * as React from 'react';
import Covid from './Stats';
import Footer from './components/Footer';


const App: React.FC = () => {
  
  return (
    <div className="App">
      <div className="jumbotron">
        <h1 className="display-4 text-dark">New Covid 19 Statistics</h1>
        <p className="lead text-dark">This is a simple comparison of the US statistics of what happened yesterday and what is happening today.</p>
      </div>
      <Covid url="https://api.covidtracking.com/v1/us/daily.json" />
      <Footer />
    </div>
  );
}
export default App;
