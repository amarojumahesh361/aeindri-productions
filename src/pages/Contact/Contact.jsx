import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPaperPlane, 
  FaCheckCircle, 
  FaExclamationCircle,
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp 
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Photography",
    message: ""
  });

  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error

  useEffect(() => {
    document.title = "Contact Us | Aeindri Productions";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simple validation checks
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setFormStatus("error");
      return;
    }

    // Simulate API request
    setTimeout(() => {
      // Simulate random success/failure to show both states (90% success, 10% error)
      const isSuccess = Math.random() > 0.1;
      if (isSuccess) {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "Photography", message: "" });
      } else {
        setFormStatus("error");
      }
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-cinematic-black min-h-screen py-16 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-4">
          <span className="text-xs uppercase tracking-[0.4em] text-gold font-semibold">
            Contact Aeindri
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
            Start Your <span className="text-gradient-gold">Project</span>
          </h1>
          <p className="text-white/60 font-light text-sm sm:text-base mt-4 leading-relaxed">
            Drop us a line about your upcoming campaign, feature film screenplay, or photography event.
          </p>
        </section>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          {/* Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-2xl font-bold tracking-wide">
                Get in Touch Directly
              </h2>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                Connect with our production office. We coordinate and dispatch film teams worldwide.
              </p>
            </div>

            {/* Details Cards */}
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-center bg-cinematic-gray border border-white/5 p-5">
                <div className="text-gold shrink-0">
                  <FaPhone size={18} />
                </div>
                <div>
                  <h3 className="text-xs text-white/40 uppercase tracking-widest font-semibold">Phone</h3>
                  <p className="text-sm font-medium mt-0.5">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex gap-4 items-center bg-cinematic-gray border border-white/5 p-5">
                <div className="text-gold shrink-0">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <h3 className="text-xs text-white/40 uppercase tracking-widest font-semibold">Email</h3>
                  <p className="text-sm font-medium mt-0.5">hello@aeindri.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-center bg-cinematic-gray border border-white/5 p-5">
                <div className="text-gold shrink-0">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <h3 className="text-xs text-white/40 uppercase tracking-widest font-semibold">Location</h3>
                  <p className="text-sm font-medium mt-0.5">100 Film City Road, Goregaon East, Mumbai, India</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Section */}
            <div className="bg-cinematic-gray border border-white/5 p-8 flex flex-col gap-4">
              <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider">
                Instant Chat
              </h3>
              <p className="text-white/50 text-xs font-light">
                Need to align instantly? Chat with our lead coordinator via WhatsApp.
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold uppercase tracking-wider text-xs py-3.5 px-6 rounded-none flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 w-full text-center"
              >
                <FaWhatsapp size={16} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7 bg-cinematic-gray border border-white/5 p-8 md:p-12 relative shadow-2xl">
            <div className="absolute inset-0 bg-gold/5 pointer-events-none" />

            <AnimatePresence mode="wait">
              {formStatus === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-16 gap-6 relative z-10"
                >
                  <FaCheckCircle className="text-gold" size={54} />
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white mb-2">Message Sent</h3>
                    <p className="text-white/60 text-sm max-w-sm font-light">
                      Thank you for contacting Aeindri Productions. We will review your brief and get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="border border-white/20 hover:border-gold hover:text-gold text-white font-medium uppercase tracking-wider text-xs py-2.5 px-6 transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 relative z-10"
                >
                  {formStatus === "error" && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 text-xs flex items-center gap-2">
                      <FaExclamationCircle className="shrink-0" />
                      <span>There was a validation or connection error. Please fill all fields and try again.</span>
                    </div>
                  )}

                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-white/70 font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Christopher Nolan"
                      className="w-full bg-cinematic-black border border-white/10 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-white/70 font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. nolan@syncopy.com"
                      className="w-full bg-cinematic-black border border-white/10 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs uppercase tracking-widest text-white/70 font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-cinematic-black border border-white/10 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-xs uppercase tracking-widest text-white/70 font-semibold">
                      Service Required
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-cinematic-black border border-white/10 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300 cursor-pointer"
                    >
                      <option value="Photography">Photography</option>
                      <option value="Videography">Videography</option>
                      <option value="Wedding Films">Wedding Films</option>
                      <option value="Corporate Films">Corporate Films</option>
                      <option value="Product Shoots">Product Shoots</option>
                      <option value="Drone Cinematography">Drone Cinematography</option>
                      <option value="Event Coverage">Event Coverage</option>
                      <option value="Social Media Content">Social Media Content</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs uppercase tracking-widest text-white/70 font-semibold">
                      Message / Project Brief
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about your shoot timeline, location, and aesthetic preferences..."
                      className="w-full bg-cinematic-black border border-white/10 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full bg-gradient-to-r from-gold via-gold/90 to-gold-dark text-black font-bold uppercase tracking-wider text-sm py-4 rounded-none hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <FaPaperPlane size={12} /> {formStatus === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Google Maps Section */}
        <section className="mb-24">
          <div className="text-center mb-10 flex flex-col gap-2">
            <span className="text-xs text-gold uppercase tracking-[0.3em] font-medium">Location Map</span>
            <h2 className="font-serif text-2xl font-bold">Find Our Studio</h2>
          </div>
          <div className="w-full aspect-[21/9] min-h-[300px] border border-white/5 relative bg-cinematic-gray">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1884976722026!2d72.88373307613768!3d19.165111049171737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7e51b32d0df%3A0x6bcfd30a6e00ab81!2sDadasaheb%20Phalke%20Chitranagri!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 opacity-85 hover:opacity-100 transition-opacity duration-300 filter invert grayscale"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aeindri Productions Studio Location Map"
            />
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-t from-black to-cinematic-black border-t border-white/5 text-center">
          <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-6">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Let's Create Something <span className="text-gradient-gold">Amazing Together</span>
            </h2>
            <p className="text-white/60 font-light max-w-md text-sm leading-relaxed">
              Our cameras are ready, our scripts are waiting, and our workstations are warmed up. Tell us your story.
            </p>
          </div>
        </section>

      </div>
    </motion.div>
  );
}
