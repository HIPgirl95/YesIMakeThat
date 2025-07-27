// components/Header.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "../styles/header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>YES, I MAKE THAT</h1>

      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/services" className={styles.link}>
          Services
        </Link>
        <Link href="/shop" className={styles.link}>
          Shop
        </Link>
        <Link href="/gallery" className={styles.link}>
          Gallery
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <a
          href="https://github.com/HIPgirl95/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FaInstagram size={28} />
        </a>
      </nav>
    </header>
  );
}
