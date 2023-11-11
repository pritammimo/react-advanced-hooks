import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mainpage from "./components/mainpage";
import Deferredhooks from "./deferredhooks/deferredhooks";
import Transitionhooks from "./transitionhooks/transitionhooks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/deferredhooks" element={<Deferredhooks />} />
          <Route path="/transitionhooks" element={<Transitionhooks />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
