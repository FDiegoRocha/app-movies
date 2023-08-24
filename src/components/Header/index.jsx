import styles from "./Header.module.css"

const Header = () =>{
    return(
        <header className={styles.header}>
            <span>
                RockFlix
            </span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Assistir</a>
            </nav>
        </header>
    )

}
export default Header