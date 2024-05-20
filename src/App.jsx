import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/digital-marketing-services-in-dallas" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
