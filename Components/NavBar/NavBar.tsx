import "./NavBar.css";
import { Link } from "react-router-dom";

//COMPONENTS
import { useWindowWidth } from "../../Hooks";
import { NavItems } from "./types";

//ASSETS
import Menu from "../../Assets/menu.svg";

export const NavBarButton = ({ text, link, setShowSidebar, special = false }: { text: string, link: string, setShowSidebar?: Function, special?: boolean }) => {
  return (
    <div className="navbarButton">
      <Link
        to={link}
        onClick={() => {
          if (setShowSidebar) setShowSidebar(false);
        }}
        className={`navbar__link${special === true ? " navbar__link--special" : ""}`}
      >
        {text}
      </Link>
      <div className={`navbarButton__double${special === true ? " navbarButton__double--special" : ""}`}>
        <Link
          to={link}
          className={`navbar__link${special === true ? " navbar__link--special" : ""}`}
        >
          {text}
        </Link>
      </div>
    </div>
  )
}

function NavBar({ showSideBar, setShowSidebar, navItems }: { showSideBar?: boolean, setShowSidebar?: Function, navItems: NavItems }) {
  const windowWidth = useWindowWidth();

  const NavSection = () => (
    <nav className="navbar__nav">
      {navItems.navItems.map((item, index) => {
        return (
          <NavBarButton key={index} text={item.title} link={item.path} setShowSidebar={setShowSidebar} special={item.special} />
        );
      })}
    </nav>
  )

  return (
    <div className="navbar">

      {(windowWidth < 768 && setShowSidebar !== undefined && showSideBar !== undefined) ? (
        <>
          <button
            className="navbar__sidebar-icon"
            onClick={() => setShowSidebar(!showSideBar)}
          >
            <img src={Menu} alt="Menu" />
          </button>
          <div
            className={`navbar__sidebar${!showSideBar ? " navbar__sidebar--hidden" : ""
              }`}
          >
            <NavSection />
          </div>
        </>
      ) : (
        <NavSection />
      )
      }
    </div >
  );
}

export default NavBar;
