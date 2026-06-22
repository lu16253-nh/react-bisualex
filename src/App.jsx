import Header from "./componentes/header/Header";
import info from "./componentes/hero/Hero";
import Info from "./componentes/informacion/Info";
import trailer from "./componentes/trailer/Trailer";
import comic from "./componentes/comic/Comic";
import Footer from "./componentes/footer/Footer";
import { LottieLUISAR } from "./componentes/LottieLUISAR";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/informacion" element={<Info />} />
        <Route path="/trailer" element={<Trailer />} />
        <Route path="/comic" element={<Comic />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/Luisa" element={<LottieLUISAR />} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
