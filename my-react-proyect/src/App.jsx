import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Padre from "./components/Hijo";

function App() {
  return (
    <>
      <div>
        <Header
          home="inicio"
          nosotros="nuestro equipo"
          contacto="contactanos"
        />
        <Main>
          <Padre />
        </Main>
        <Footer />
      </div>
    </>
  );
}

export default App;
