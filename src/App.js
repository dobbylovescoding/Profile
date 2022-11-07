import SideBar from "./components/SideBar";
import { useState } from "react";
import Howie from "./components/Howie";
import styles from "./App.module.css";
import background from "./images/background.jpeg";

function App() {
  const [displayedContent, setDisplayedContent] = useState(<Howie />);
  return (
    <div>
      <div className={styles.sideBar}>
        <SideBar setDisplayedContent={setDisplayedContent} />

        <div className={styles.displayedContent}>{displayedContent}</div>
      </div>
    </div>
  );
}

export default App;
