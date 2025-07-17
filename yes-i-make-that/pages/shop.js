import Link from "next/link";
import ColorBooksCarousel from "../components/coloringBooksCarousel";

export default function Shop() {
  return (
    <div>
      <h1>Our Shop</h1>
      <p>Explore our range of products.</p>
      <Link href="/shopPages/coloringBooks">Coloring Books</Link>
      <ColorBooksCarousel />
      <ColorBooksCarousel />
      <ColorBooksCarousel />
    </div>
  );
}
// pages/shop.js
