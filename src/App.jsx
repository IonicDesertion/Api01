import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Personajes from "./pages/Personajes";
import Transformaciones from "./pages/Transformaciones";
import Planetas from "./pages/Planetas";
import Error404 from "./pages/Error404";
import DetallePersonajes from "./pages/DetallePersonajes";

const App = () => {
  return (
    <BrowserRouter>
    <div className="app">
      <Header />
        <Routes>
          <Route path="/" element={<Personajes/>}/>
          <Route path="/personajes" element={<Personajes/>}/>
          
          <Route path="/transformaciones" element={<Transformaciones/>}/>
          <Route path="/planetas" element={<Planetas/>}/>
          <Route path="/detallepersonajes/:id" element={<DetallePersonajes/>}/>
          <Route path="*" element={<Error404/>}/>

        </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
};

export default App;
