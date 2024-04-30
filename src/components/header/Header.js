import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import styles from "./Header.module.scss";

export const logo = (
  <div className={styles.logo}>
    <Link to={"/"}>
      <h2>
        Timsia<span>Online</span>
      </h2>
    </Link>
  </div>
);

export const cart = (
  <span className={styles.cart}>
    <Link to="/cart">
      Cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };
  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <div
            className={
              showMenu
                ? `${styles["nav-wrapper"]}${styles["show-nav-wrapper"]}`
                : `${styles["hide-menu"]}`
            }
            onClick={hideMenu}
          >
            Menu
          </div>
          <ul>
            <li className={styles["logo-mobile"]}>
              {logo}
              <FaTimes size={22} color={"#fff"} onClick={hideMenu} />
            </li>
            <li>
              <NavLink to={"/shop"} className={activeLink}>
                Shop
              </NavLink>
            </li>
          </ul>
          <div className={styles["header-right"]}>
            <span className={styles.links}>
              <NavLink to={"/login"} className={activeLink}>
                Login
              </NavLink>
              <NavLink to={"/register"} className={activeLink}>
                Register
              </NavLink>
              <NavLink to={"/order-history"} className={activeLink}>
                My Order
              </NavLink>
            </span>
            {cart}
          </div>
        </nav>
        <div className={styles["menu-icon"]}>
          {cart}
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
