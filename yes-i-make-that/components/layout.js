// components/Layout.js
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh", padding: "1rem" }}>{children}</main>
      <Footer />
    </>
  );
}
