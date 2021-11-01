import React from "react";
import Acceuil from "./pages/Acceuil";
import BlocDeux from "./pages/BlocDeux";
import BlocTrois from "./pages/BlocTrois";
import BlocQuatre from "./pages/BlocQuatre";
import BlocCinq from "./pages/BlocCinq";
import BlocSix from "./pages/BlocSix";
import BlocSept from "./pages/BlocSept";
import Footer from "./pages/Footer";
import BlocAnimate from "./pages/BlocAnimate";
import "aos/";
import { AnimatePresence } from "framer-motion";
const App = () => (
  <AnimatePresence>
    <Acceuil />
    <BlocDeux />
    <BlocTrois />
    <BlocQuatre />
    <BlocCinq />
    <BlocSix />
    <BlocAnimate />
    <BlocSept />
    <Footer />
  </AnimatePresence>
);

export default App;
