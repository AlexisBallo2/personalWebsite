import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Portfolio from "./components/Portfolio";
import SwitchPage from "./SwitchPage";
// import your route components too

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<SwitchPage />} />
    </Routes>
  </BrowserRouter>
);
