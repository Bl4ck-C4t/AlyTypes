import './App.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from "./Navbar";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import AnxiousPage from "./pages/AnxiousPage";
import GamerPage from "./pages/GamerPage";
import EnigmaPage from "./pages/EnigmaPage";
import CutePage from "./pages/CutePage";

function App() {
  return (
      <>
          <Navbar />
          <div className="container">

              <Routes>
                  <Route path="/" element={ <HomePage /> } />
                  {/*<Route path="/RosieTypes" element={ <HomePage /> } />*/}
                  <Route path="/test" element={ <TestPage /> } />
                  <Route path="/anxious" element={ <AnxiousPage /> } />
                  <Route path="/gamer" element={ <GamerPage /> } />
                  <Route path="/enigma" element={ <EnigmaPage /> } />
                  <Route path="/cute" element={ <CutePage /> } />

              </Routes>
          </div>
      </>
  )
}

export default App;
