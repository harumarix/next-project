import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Amals Photogallery</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Photos</Link>
          </li>
          <li>
            <Link href="/new-photo">Add New Photo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
