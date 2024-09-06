import style from "./navbar.module.css";
export const NavBar = () => {
    return (
      <div className={style.root}>
        <h3>42i Chalenge</h3>
        <a href="coverage\lcov-report\index.html">test</a>
      </div>
    );
  };
  export default NavBar;