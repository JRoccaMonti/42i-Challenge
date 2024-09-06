import styles from "./App.module.css";
import { NavBar,TowNumbers } from "./Components/index";
function App() {

  return (
    <div className={styles.root}>
      <NavBar/>
      <TowNumbers/>
    </div>
  )
}

export default App
