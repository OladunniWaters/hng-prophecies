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
        <Route path="/januaryProphecy" element={<JanProphecy/>} />
        <Route path="/aprilProphecy" element={<AprProphecy/>} />
        <Route path="/augustProphecy" element={<AugProphecy/>} />
        <Route path="/decemberProphecy" element={<DecProphecy/>} />
        <Route path="/februaryProphecy" element={<FebProphecy/>} />
        <Route path="/julyProphecy" element={<JulyProphecy/>} />
        <Route path="/juneProphecy" element={<JuneProphecy/>} />
        <Route path="/marchProphecy" element={<MarchProphecy/>} />
        <Route path="/mayProphecy" element={<MayProphecy/>} />
        <Route path="/novemberProphecy" element={<NovProphecy/>} />
        <Route path="/octoberProphecy" element={<OctProphecy/>} />
        <Route path="/septemberProphecy" element={<SeptProphecy/>} />
      </Routes>
    </HashRouter>  
    </div>
  );
}

export default App;

