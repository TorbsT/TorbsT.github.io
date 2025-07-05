import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Mask from "./pages/Home/Mask";
import About from "./pages/About";
import Blobs from "./pages/Home/Blobs";
import Layout from "./pages/Home/LayoutTest";
import CursorTrail from "./garbage/CursorTrail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/mask" element={<Mask />} />
      <Route path="/blobs" element={<Blobs />} />
      <Route path="/layout" element={<Layout />} />
      <Route path="/trail" element={<Layout />} />
    </Routes>
  );
}
