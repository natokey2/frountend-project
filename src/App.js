

import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Posts from './Posts';

function App() {

    const name="natiq al hawmani";
    const age = 38;
    const salary=3800;
    const website="facebook.com";
  return (
    
   
    <div className="App">
       
       <Navbar />
       {/* <Posts /> */}
       
       

       {/* <Home /> */}
      {/* <h1>{name}</h1>
      <p>{age}</p>
      <p>{salary}</p>
      <a href={ website}>facebook</a><br/> */}
      {/* <About /> */}
      
    </div>
  );
}

export default App;
