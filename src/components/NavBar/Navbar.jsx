import { Link } from 'react-router-dom'
import styles from './NavBar.module.css';


const NavBar = ({ user, handleSignout }) => {
    return (
        <>
            { user ? (
                <nav>
                    <ul className={styles.container}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/foods">FOODS</Link></li>
                        <li><Link to="/foods/new">New Foods</Link></li>
                        <li><Link to="" onClick={handleSignout}>Sign Out</Link></li>
                    </ul>
                </nav>
            ) : (
                <nav>
                    <ul className={styles.container}>
                        <li><Link to="/signin">Sign In</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                    </ul>
                </nav>
            )}
        </>
    )
}

export default NavBar 