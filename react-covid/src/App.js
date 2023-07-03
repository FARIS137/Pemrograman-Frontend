import Indonesia from "./pages/Covid/Indonesia";
import About from "./pages/Covid/About";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Provinsi from "./pages/Covid/Provinsi";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      {/*
       * Render Halaman Home
       * Jika ingin diubah, maka ubah di Halaman Home.
       */}
       <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/covid/indonesia" element={<Indonesia />}></Route>
        <Route path="/covid/provinsi" element={<Provinsi />}></Route>
        <Route path="/covid/about" element={<About />}></Route>
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
