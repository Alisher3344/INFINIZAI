import { useEffect, useState } from "react";
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
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      <a href="#top" className={`back-to-top ${showButton ? "show" : ""}`}>
        ↑
      </a>
    </>
  );
}

export default App;
