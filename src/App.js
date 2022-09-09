import Router from "./Router";
import {AnimatePresence} from "framer-motion";
import "./style/font.css";
import {Reset} from "styled-reset";

function App() {
  return (
    <>
      <Reset />
      <AnimatePresence>
        <Router />
      </AnimatePresence>
    </>
  );
}

export default App;
