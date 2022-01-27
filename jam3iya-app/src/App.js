import NavBar from "./Component/NavBar";
import "./App.css";
import Jam3yalist from "./Component/Jam3yalist";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Details from "./Component/Details";

import HomePage from "./Component/HomePage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jam3yalist" element={<Jam3yalist />} />
        <Route path="/jam3yalist/:jam3yaSlug" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
