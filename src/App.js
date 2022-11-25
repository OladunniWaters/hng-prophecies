import  JanProphecy from "./Prophecies/JanProphecy/JanProphecy"
import Timeline from "./Timeline/Timeline"
import {BrowserRouter as HashRouter, Routes, Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
    <HashRouter>
      <Routes>
        <Route path="/" element={<Timeline/>} />
        <Route path="/JanuaryProphecy" element={<JanProphecy/>} />
      </Routes>
    </HashRouter>  
    </div>
  );
}

export default App;

