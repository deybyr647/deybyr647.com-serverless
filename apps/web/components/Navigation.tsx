import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import styles from "../styles/components/Navigation.module.scss";
import { useState, MouseEvent } from "react";

const Navigation = () => {
  const [activeStatus, setActiveStatus] = useState(false);

  const showNavbar = (e: MouseEvent<HTMLAnchorElement>): void => {
    setActiveStatus(!activeStatus);
  };

  return (
    <nav
      className={"navbar has-background-blue"}
      role={"navigation"}
      aria-label={"main navigation"}
    >
      <div className={"navbar-brand is-flex is-align-items-center"}>
        <Link href={"/"}>
          <figure className={`image is-48x48 ${styles.logo}`}>
            <Image src={logo} alt={"Deyby Rodriguez Logo"} />
          </figure>
        </Link>

        <a
          role={"button"}
          className={activeStatus ? "is-active navbar-burger" : "navbar-burger"}
          aria-label={"menu"}
          aria-expanded={"false"}
          data-target={"navbarBasicExample"}
          onClick={showNavbar}
        >
          <span aria-hidden={"true"}></span>
          <span aria-hidden={"true"}></span>
          <span aria-hidden={"true"}></span>
        </a>
      </div>

      <div
        className={
          activeStatus
            ? "is-active navbar-menu has-background-blue"
            : "navbar-menu"
        }
      >
        <div className={"navbar-end has-text-centered"}>
          <Link className={"navbar-item has-text-white"} href={"#about"}>
            About
          </Link>

          <Link className={"navbar-item has-text-white"} href={"#projects"}>
            Projects
          </Link>

          <Link
            className={"navbar-item has-text-white"}
            href={"/Deyby Rodriguez - Resume.pdf"}
            target={"_blank"}
            rel={"noreferrer noopener"}
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
