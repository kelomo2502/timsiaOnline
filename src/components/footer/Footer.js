import styles from "./Footer.module.scss"

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
        <p>&copy;{year} All Right Reserved</p>
    </footer>
  )
}

export default Footer