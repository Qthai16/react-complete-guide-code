import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              New Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
