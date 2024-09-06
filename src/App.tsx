import styles from "./App.module.css";
import { NavBar,TowNumbers,ConstructibleChange } from "./Components/index";
function App() {

  return (
    <div className={styles.root}>
      <NavBar/>
      <TowNumbers/>
      <ConstructibleChange/>
    </div>
  )
}

export default App
