import './App.css';
import DevCol from './components/developer-column';
import ProjCol from './components/projects-column';


function App() {
  return (
    <div className="App">
      <ProjCol />
      <DevCol />
    </div>
  );
}

export default App;