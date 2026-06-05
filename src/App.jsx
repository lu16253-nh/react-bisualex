import Header from "./componentes/header/Header";
import Hero from "./componentes/hero/Hero";
import Info from "./componentes/informacion/Info";
import Trailer from "./componentes/trailer/Trailer";
import Comic from "./componentes/comic/Comic";
import Footer from "./componentes/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Info />
      <Trailer />
      <Comic />
      <Footer />   {/* Footer al final */}
    </>
  );
}

export default App;
