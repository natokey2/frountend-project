

import './App.css';
import Navbar from './Navbar';

function App() {

    const name="natiq al hawmani";
    const age = 38;
    const salary=3800;
    const website="facebook.com";
  return (
    
    <div className="App">
      <Navbar />
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{salary}</p>
      <a href={ website}>facebook</a>
    </div>
  );
}

export default App;
