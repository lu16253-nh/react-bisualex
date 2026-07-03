import Header from "./componentes/header/Header";
import info from "./componentes/hero/Hero";
import Info from "./componentes/informacion/Info";
import trailer from "./componentes/trailer/Trailer";
import comic from "./componentes/comic/Comic";
import { LottieLUISAR } from "./componentes/LottieLUISAR";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trailer from "./componentes/trailer/Trailer";
import Comic from "./componentes/comic/Comic";
import { Footer } from "./componentes/footer/Footer";
import Hero from "./componentes/hero/Hero";
import ComicApp from "./componentes/ComicApp";
import { Home } from "./componentes/Home";
import Recomendaciones from "./componentes/Recomendaciones/Recomendaciones";



const App = () => {
  return (
    <BrowserRouter    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comic" element={<Comic />} />
        <Route path="/comicapp" element={<ComicApp />} />
      </Routes>
     
    </BrowserRouter>
  )

}

export default App
