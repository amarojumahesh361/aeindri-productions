import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaVimeoV, FaFilm, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "../Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cinematic-black border-t border-gold/10 pt-16 pb-8 text-white/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <Logo size={65} />
          </Link>
          <p className="text-sm font-light leading-relaxed max-w-xs mt-2 text-white/50">
            A luxury cinematic production house crafting visual narratives and emotional cinematic experiences worldwide.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-gold transition-colors duration-300" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-gold transition-colors duration-300" aria-label="YouTube">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="hover:text-gold transition-colors duration-300" aria-label="Vimeo">
              <FaVimeoV size={20} />
            </a>
            <a href="#" className="hover:text-gold transition-colors duration-300" aria-label="IMDb">
              <FaFilm size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-lg font-semibold tracking-wide text-white uppercase">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 text-sm font-light">
            <li>
              <Link to="/" className="hover:text-gold transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold transition-colors duration-300">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gold transition-colors duration-300">Services</Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-gold transition-colors duration-300">Portfolio</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-gold transition-colors duration-300">Gallery</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold transition-colors duration-300">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services Teaser */}
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-lg font-semibold tracking-wide text-white uppercase">
            Expertise
          </h3>
          <ul className="flex flex-col gap-2 text-sm font-light text-white/50">
            <li>Feature Films</li>
            <li>Brand Commercials</li>
            <li>Cinematic Visuals</li>
            <li>Post-Production & VFX</li>
            <li>Color Grading</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-lg font-semibold tracking-wide text-white uppercase">
            Contact
          </h3>
          <ul className="flex flex-col gap-3 text-sm font-light">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-gold shrink-0" />
              <span>100 Film City Road, Mumbai, India</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-gold shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-gold shrink-0" />
              <span>hello@aeindri.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-light text-white/40 gap-4">
        <p>© {currentYear} Aeindri Productions. All Rights Reserved.</p>
        <p className="flex gap-4">
          <a href="#" className="hover:text-gold transition-colors duration-300">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-gold transition-colors duration-300">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
