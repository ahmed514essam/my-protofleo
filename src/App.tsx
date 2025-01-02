import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Root from "./Root";
import Home from "./Pages/Home/Home";







function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root/>}>
 <Route path="/" element={<Home/>} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;