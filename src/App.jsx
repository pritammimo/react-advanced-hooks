import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mainpage from "./components/mainpage";
import Deferredhooks from "./deferredhooks/deferredhooks";
import Transitionhooks from "./transitionhooks/transitionhooks";
import Imperativehandlehooks from "./imperativehandlehooks/imperativehandlehooks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/deferredhooks" element={<Deferredhooks />} />
          <Route path="/transitionhooks" element={<Transitionhooks />} />
          <Route path="/imperativehandlehooks" element={<Imperativehandlehooks />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
