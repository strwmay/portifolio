import styles from "./Header.module.css";
import githubIcon from "../../assets/logo-github.svg";
import pinterestIcon from "../../assets/logo-pinterest.svg";
import instagramIcon from "../../assets/logo-instagram.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <a href="#home">STRWMAY</a>
      </div>
      <nav className={styles.nav}>
        <a href="#about">ABOUT ME</a>
        <a href="#about">SKILLS</a>
        <a href="#about">PROJECTS</a>
        <a href="#about">CONTACT</a>
      </nav>
      <div className={styles.right}>
        <a
          href="https://github.com/strwmay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://pinterest.com/strwmaay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={pinterestIcon} alt="Pinterest" />
        </a>
        <a
          href="https://instagram.com/strwmay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </header>
  );
};

export default Header;
