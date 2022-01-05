import logo from "./logo.svg";
import styles from "./App.module.scss";
import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import WorkPage from "./WorkPage";
import WorkPageDetail from "./WorkPageDetail";
import Contact from "./Contact";
function App() {
  //get value of location

  return (
    <div className={styles.App}>
      {/*Header*/}
      <header className={styles.header}>
        <div className={styles.box}>
          <Link to="/">
            <div className={styles.boxleft}>
              <img src={require("../../src/assets/images/logo.jpg")} alt="sophie"/>
            </div>
          </Link>
          <div className={styles.boxright}>
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/works">
              <p>Work</p>
            </Link>
            <Link to="/contact">
              <p>Contact</p>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className={styles.content}>
        <div>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/works" exact element={<WorkPage />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
        </div>
      </section>

      {/*footer*/}
      <footer className={styles.footer}>
        <p>
          © Copyright<b> 2022 Wen Sophie Xu</b>
        </p>
      </footer>
    </div>
  );
}

export default App;
