// components/Header.js
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <header
      style={{
        padding: "1rem",
        background: "#333",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>YES, I MAKE THAT</h1>
      <nav style={{ display: "flex", gap: "2rem", fontSize: "2rem" }}>
        <Link href="/" style={{ color: "#fff" }}>
          Home
        </Link>
        <Link href="/about" style={{ color: "#fff" }}>
          About
        </Link>
        <Link href="/services" style={{ color: "#fff" }}>
          Services
        </Link>
        <Link href="/shop" style={{ color: "#fff" }}>
          Shop
        </Link>
        <Link href="/gallery " style={{ color: "#fff" }}>
          Gallery
        </Link>
        <Link href="/contact" style={{ color: "#fff" }}>
          Contact
        </Link>
      </nav>
      <a
        href="https://github.com/HIPgirl95/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#fff", textDecoration: "none" }}
      >
        <FaInstagram size={40} />
      </a>
    </header>
  );
}
