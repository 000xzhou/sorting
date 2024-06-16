import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./components/HomePage";
import Bubble from "./components/Bubble";
import Merge from "./components/Merge";
import Insertion from "./components/Insertion";
import Quick from "./components/Quick";
import Radix from "./components/Radix";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bubble" element={<Bubble />} />
          <Route path="/merge" element={<Merge />} />
          <Route path="/insertion" element={<Insertion />} />
          <Route path="/quick" element={<Quick />} />
          <Route path="/radix" element={<Radix />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
