import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Gallery from "./pages/gallery/gallery";
import Liturgy from "./pages/liturgy/liturgy";
import NotFound from "./pages/notFound/notFound";
import Parish from "./pages/parish/parish";
import Staffs from "./pages/staff/staffs";
import Tithe from "./pages/tithe/tithe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Sacrament from "./pages/sacrament/sacrament";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="liturgy" element={<Liturgy />} />
        <Route path="parish" element={<Parish />} />
        <Route path="staffs" element={<Staffs />} />
        <Route path="tithe" element={<Tithe />} />
        <Route path="sacrament" element={<Sacrament />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
