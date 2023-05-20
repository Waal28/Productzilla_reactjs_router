import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import About from "./Task9/About";
import Contact from "./Task9/Contact";
import Home from "./Task9/Home";
import Navbar from "./Task9/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar>
              <Home />
            </Navbar>
          }
        />
        <Route
          path="/about"
          element={
            <Navbar>
              <About />
            </Navbar>
          }
        />
        <Route
          path="/contact"
          element={
            <Navbar>
              <Contact />
            </Navbar>
          }
        />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
