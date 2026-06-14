import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import ScrollProgress from "./ScrollProgress";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-cinematic-black text-white selection:bg-gold selection:text-black">
      {/* Scroll Progress Line */}
      <ScrollProgress />

      {/* Scroll to Top behavior on path changes */}
      <ScrollToTop />

      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
}
