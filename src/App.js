import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Mask from "./pages/Home/Mask";
import About from "./pages/About";
import Blobs from "./pages/Home/Blobs";
import Layout from "./pages/Home/LayoutTest";
import Countdown from "./pages/Countdown";
import NotFound from "./pages/NotFound";
import CursorTrail from "./garbage/CursorTrail";
import MainPage from "./pages/Home/MainPage";
import Projects from "./pages/Projects/Projects";
import EvilWordle from "./pages/EvilWordle/EvilWordle";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home>
            <MainPage />
          </Home>
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/mask" element={<Mask />} />
      <Route path="/blobs" element={<Blobs />} />
      <Route path="/layout" element={<Layout />} />
      <Route path="/countdown" element={<Countdown />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/evilwordle" element={<EvilWordle />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
