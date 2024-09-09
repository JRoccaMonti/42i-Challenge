import style from "./NavBar.module.css";
export const NavBar = () => {
    return (
      <div className={style.root}>
        <h3>42i Chalenge</h3>
        <a className={style.jestLink} href="coverage\lcov-report\index.html">Jest Coverage</a>
      </div>
    );
};