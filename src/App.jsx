import "./App.css";
import Aside from "./pages/Aside";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Type from "./pages/Type";
import Zone from "./pages/Zone";
import Nav from "./pages/Nav";
import Section from "./pages/Section";
import Exemple from "./pages/Exemple";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Section />
      <Aside />
      <Exemple />
      <Type />
      <Zone />
      <Footer />
    </>
  );
}

export default App;
