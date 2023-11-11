import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mainpage from "./components/mainpage";
import Deferredhooks from "./deferredhooks/deferredhooks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/deferredhooks" element={<Deferredhooks />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
