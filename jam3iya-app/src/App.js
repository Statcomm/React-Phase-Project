import NavBar from "./Component/NavBar";
import "./App.css";
import Jam3yalist from "./Component/Jam3yalist";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import HomePage from "./Component/HomePage";

import Details from "./Component/Details"

function App() {
  return (
    <div>
      <NavBar />
      <Jam3yalist />
      <Routes>

        <Route path="/" element={<HomePage/>}/>

        <Route path="/jam3yalist" element={<Jam3yalist />}/>

       

        <Route path="/details/:jam3yaSlug" element={<Details />}/>

      </Routes>
      
    </div>
  );
}

export default App;
