import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.headerDiv}>
      <nav>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#achievements">Achievements</a>
        </li>
      </nav>
    </div>
  );
}

export default Header;
