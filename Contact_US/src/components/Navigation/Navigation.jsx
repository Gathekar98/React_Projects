
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation}` }>
    <div>
    <img className="logo" src="/images/logo.png" alt="logo"/>
    </div>

    <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
   
    </ul>
    </nav>
  )
}

export default Navigation
