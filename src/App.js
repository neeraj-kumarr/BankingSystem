import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "./Components/Customer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/customer" element={<Customer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
