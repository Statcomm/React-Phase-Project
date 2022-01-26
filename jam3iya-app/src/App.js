import NavBar from "./Component/NavBar";
import "./App.css";
import Jam3yalist from "./Component/Jam3yalist";
import 'bootstrap/dist/css/bootstrap.min.css';
import jam3yaStore from "./Stores/Jam3yastore";
import Details from "./Component/Details";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <Routes>
        
        <Route path="/jam3yalist" element={<Jam3yalist jam3yaList={jam3yaStore}/>} />
        <Route path="/jam3yalist/:jam3yaSlug" element={<Details/>}/>
      </Routes>
       */}

      
      
    </div>
  );
}

export default App;



{/* <Route path="/" element={<Home/>}/> */}
