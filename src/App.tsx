import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./components/HomePage";
import Bubble from "./components/Bubble";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bubble" element={<Bubble />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
