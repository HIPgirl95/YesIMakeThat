import Link from "next/link";
import ColoringBooksCarousel from "../components/coloringBooksCarousel";
import styles from "../styles/shop.module.css";

export default function Shop() {
  return (
    <div>
      <h1>Our Shop</h1>
      <p>Explore our range of products.</p>
      <Link href="/shopPages/customNails">Custom Nails</Link>
      <h2 className={styles.carouselTitle}>Coloring Books:</h2>
      <ColoringBooksCarousel/>
      <h2 className={styles.carouselTitle}>Illustrated books:</h2>
      <ColoringBooksCarousel />
      <h2 className={styles.carouselTitle}>Etsy:</h2>
      <ColoringBooksCarousel />
      <a href="#" target="_blank" rel="noopener noreferrer">
        Visit our Etsy shop 
      </a>
    </div>
  );
}
// pages/shopPages/customNails.js
