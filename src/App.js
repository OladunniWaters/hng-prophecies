import  JanProphecy from "./Prophecies/JanProphecy/JanProphecy";
import  AprProphecy from "./Prophecies/AprProphecy/AprProphecy";
import  AugProphecy from "./Prophecies/AugProphecy/AugProphecy";
import  DecProphecy from "./Prophecies/DecProphecy/DecProphecy";
import  FebProphecy from "./Prophecies/FebProphecy/FebProphecy";
import  JulyProphecy from "./Prophecies/JulyProphecy/JulyProphecy";
import  JuneProphecy from "./Prophecies/JuneProphecy/JuneProphecy";
import  MarchProphecy from "./Prophecies/MarchProphecy/MarchProphecy";
import  MayProphecy from "./Prophecies/MayProphecy/MayProphecy";
import  NovProphecy from "./Prophecies/NovProphecy/NovProphecy";
import  OctProphecy from "./Prophecies/OctProphecy/OctProphecy";
import  SeptProphecy from "./Prophecies/SeptProphecy/SeptProphecy";
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
        <Route path="/AprilProphecy" element={<AprProphecy/>} />
        <Route path="/AugustProphecy" element={<AugProphecy/>} />
        <Route path="/DecemberProphecy" element={<DecProphecy/>} />
        <Route path="/FebruaryProphecy" element={<FebProphecy/>} />
        <Route path="/JulyProphecy" element={<JulyProphecy/>} />
        <Route path="/JuneProphecy" element={<JuneProphecy/>} />
        <Route path="/MarchProphecy" element={<MarchProphecy/>} />
        <Route path="/MayProphecy" element={<MayProphecy/>} />
        <Route path="/NovemberProphecy" element={<NovProphecy/>} />
        <Route path="/OctoberProphecy" element={<OctProphecy/>} />
        <Route path="/SeptemberProphecy" element={<SeptProphecy/>} />
      </Routes>
    </HashRouter>  
    </div>
  );
}

export default App;

