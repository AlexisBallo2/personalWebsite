import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Portfolio from "./components/Portfolio";
// import your route components too

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<HomePage />}> */}
      <Route index element={<HomePage />} />
      <Route path="/portfolio" element={<Portfolio />}>
        <Route path=":teamId" element={<HomePage />} />
        <Route path="new" element={<HomePage />} />
        <Route index element={<HomePage />} />
      </Route>
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
);
