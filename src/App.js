import Router from "./Router";
import {AnimatePresence} from "framer-motion";
import "./style/font.css";
import {Reset} from "styled-reset";
import {useDispatch} from "react-redux";
import {loadUser} from "./redux/modules/userSlice";
import {useEffect} from "react";

function App() {
  const dispatch = useDispatch();
  /** STAY SIGNED IN */
  const staySignedIn = () => {
    try {
      const user = localStorage.getItem("user");
      if (!user) return;
      dispatch(loadUser(JSON.parse(user)));
    } catch (error) {
      console.log("localStorage is not working");
    }
  };
  useEffect(() => {
    staySignedIn();
  }, []);

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
