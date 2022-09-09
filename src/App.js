import Router from "./Router";
import { AnimatePresence } from "framer-motion";
import "./style/font.css";

function App() {
  return (
    <>
      <AnimatePresence>
        <Router />
      </AnimatePresence>
    </>
  );
}

export default App;
