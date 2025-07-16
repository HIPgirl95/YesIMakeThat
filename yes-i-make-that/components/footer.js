// components/Footer.js
export default function Footer() {
  return (
    <footer
      style={{ padding: "1rem", background: "#f4f4f4", textAlign: "center" }}
    >
      <p>&copy; {new Date().getFullYear()} My Company Name</p>
    </footer>
  );
}
