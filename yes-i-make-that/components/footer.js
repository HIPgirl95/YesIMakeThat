// components/Footer.js
import Link from "next/link";
import styles from "../styles/footer.module.css";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className={styles.footer}
    >
     <a
        href="https://www.instagram.com/yes.imakethat/?igsh=dDB5NjlzYzQ5Y2E1&utm"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.icon}
      >
        <FaInstagram size={28} />
      </a>
    </footer>
  );
}
