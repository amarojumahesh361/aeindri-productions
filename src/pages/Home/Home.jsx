import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPlay, 
  FaTimes, 
  FaCamera, 
  FaVideo, 
  FaCalendarAlt, 
  FaBriefcase, 
  FaShareAlt, 
  FaAward, 
  FaUsers, 
  FaRegClock, 
  FaCrown,
  FaChevronLeft, 
  FaChevronRight 
} from "react-icons/fa";
import { Link } from "react-router-dom";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Home() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useDocumentTitle("Crafting Stories Through Visual Excellence");

  const services = [
    {
      icon: <FaCamera className="text-gold text-3xl" />,
      title: "Photography",
      desc: "High-end portraiture, editorial fashion shoots, and atmospheric visual campaigns.",
    },
    {
      icon: <FaVideo className="text-gold text-3xl" />,
      title: "Videography",
      desc: "Cinematic filming, artistic editing, and high-fidelity video capture on prime sets.",
    },
    {
      icon: <FaCalendarAlt className="text-gold text-3xl" />,
      title: "Event Coverage",
      desc: "Premium dynamic coverage of corporate events, grand launches, and private galas.",
    },
    {
      icon: <FaBriefcase className="text-gold text-3xl" />,
      title: "Corporate Films",
      desc: "High-impact brand narratives, industrial features, and corporate profile stories.",
    },
    {
      icon: <FaShareAlt className="text-gold text-3xl" />,
      title: "Social Media Content",
      desc: "Snappy, engaging short-form reels and premium content tailored for modern feeds.",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Shadows in the Mist",
      category: "Feature Film",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Zenith X1 Launch",
      category: "Corporate Campaign",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Echoes of Summer",
      category: "Music Video",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "The Silent Peak",
      category: "Documentary Short",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Elysian Fragrance",
      category: "Brand Film",
      image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Neon Pulse",
      category: "VFX / Visual Art",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaAward className="text-gold text-3xl" />,
      title: "Creative Excellence",
      desc: "Delivering artistic visions with meticulous planning, script craft, and aesthetic direction."
    },
    {
      icon: <FaUsers className="text-gold text-3xl" />,
      title: "Professional Team",
      desc: "Collaborating with elite directors, cinematographers, and visual effects specialists."
    },
    {
      icon: <FaRegClock className="text-gold text-3xl" />,
      title: "Timely Delivery",
      desc: "Strict adherence to schedule milestones, assuring timely rendering and final delivery."
    },
    {
      icon: <FaCrown className="text-gold text-3xl" />,
      title: "Premium Quality",
      desc: "Mastered at up to 8K resolution, featuring spatial sound scoring and custom color grading."
    }
  ];

  const testimonials = [
    {
      quote: "Aeindri Productions doesn't just shoot videos; they capture souls. Their attention to lighting, sound design, and emotional resonance is unparalleled in the industry.",
      author: "Vikram Mehta",
      role: "Creative Director, Aura Global"
    },
    {
      quote: "Working with the Aeindri team on our commercial was a masterclass in efficiency and artistry. The final delivery blew our stakeholders away and drove record engagement.",
      author: "Sophia Chen",
      role: "Brand Lead, Zenith Autos"
    },
    {
      quote: "The visual storytelling and VFX details they produced for our indie feature film were world-class. Absolute professionals with a deeply artistic touch.",
      author: "Kabir Dev",
      role: "Independent Filmmaker"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-cinematic-black min-h-screen"
    >
      {/* 1. Hero Section */}
      <section className="relative h-[95vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Visual Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-cinematic-black z-10" />
        
        {/* Video or Image Background Placeholder */}
        <div className="absolute inset-0 w-full h-full scale-105">
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop"
            alt="Cinematic Camera Setup"
            className="w-full h-full object-cover opacity-35 filter grayscale"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl px-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-gold font-semibold">
              Aeindri Productions
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
          >
            Crafting Stories Through <span className="text-gradient-gold">Visual Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base sm:text-lg text-white/70 font-light max-w-2xl mb-12 leading-relaxed"
          >
            Capturing moments, creating stories, and delivering unforgettable visual experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <Link
              to="/portfolio"
              className="w-full sm:w-auto text-center bg-gradient-to-r from-gold via-gold/90 to-gold-dark text-black font-semibold uppercase tracking-wider text-sm py-4 px-8 rounded-none hover:shadow-gold-glow hover:scale-105 transition-all duration-300"
            >
              Explore Portfolio
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto text-center border border-white/20 hover:border-gold hover:text-gold text-white font-medium uppercase tracking-wider text-sm py-4 px-8 rounded-none transition-all duration-300 backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. About Preview Section */}
      <section className="py-24 bg-cinematic-gray relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Company Image Placeholder */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent absolute -top-4 -left-4 w-full h-full border border-gold/20 -z-10 group-hover:top-0 group-hover:left-0 transition-all duration-500" />
            <img
              src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop"
              alt="Behind the scenes shoot setup"
              className="w-full object-cover aspect-[4/3] border border-white/10 group-hover:border-gold/30 transition-all duration-500 shadow-2xl"
            />
          </motion.div>

          {/* Right: Text details */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col gap-6"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              Who We Are
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              A Legacy of <span className="text-gradient-gold">Cinematic Craft</span>
            </h2>
            <p className="text-white/70 font-light leading-relaxed text-sm">
              Aeindri Productions is a luxury boutique production agency dedicated to the craft of film. We combine the art of storytelling with cutting-edge production methodologies to capture stunning visual assets.
            </p>
            <p className="text-white/60 font-light leading-relaxed text-sm">
              Our award-winning directors and post-production suites specialize in taking raw ideas and developing them into cohesive brand films, events coverage, and narrative features.
            </p>
            <div className="mt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-gold hover:text-white font-medium uppercase tracking-widest text-sm transition-colors duration-300 group"
              >
                Learn More <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Services Preview Section */}
      <section className="py-24 bg-cinematic-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              Our Expertise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Custom Production Services
            </h2>
            <p className="text-white/50 text-xs font-light tracking-wide max-w-md mx-auto">
              We provide end-to-end creative resources to ensure your projects receive premier execution.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {services.map((service, idx) => (
              <motion.div
                variants={fadeInUp}
                key={idx}
                className="bg-cinematic-gray p-8 border border-white/5 hover:border-gold/30 hover:shadow-gold-glow hover:-translate-y-2 transition-all duration-300 group flex flex-col gap-4"
              >
                <div className="group-hover:scale-110 transition-transform duration-300 origin-left">
                  {service.icon}
                </div>
                <h3 className="font-serif text-lg font-bold tracking-wide text-white group-hover:text-gold transition-colors duration-300 uppercase mt-2">
                  {service.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed font-light">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 4. Featured Projects Section */}
      <section className="py-24 bg-cinematic-gray border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              Portfolio Highlight
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Featured Creations
            </h2>
            <p className="text-white/50 text-xs font-light">
              A curation of our recent cinematic projects and commercial collaborations.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                variants={fadeInUp}
                key={project.id}
                className="group relative overflow-hidden bg-cinematic-black border border-white/5 aspect-[16/10]"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Text Info */}
                <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col gap-1 z-10">
                  <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-semibold">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 border border-gold/40 hover:border-gold text-gold hover:bg-gold hover:text-black font-semibold uppercase tracking-widest text-xs py-3 px-8 rounded-none transition-all duration-300"
            >
              View All Works
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="py-24 bg-cinematic-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              Our Values
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Why Collaborate With Us
            </h2>
            <p className="text-white/50 text-xs font-light">
              Crafting premium visual stories with precision delivery and artistic mastery.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((feat, idx) => (
              <motion.div
                variants={fadeInUp}
                key={idx}
                className="bg-cinematic-gray p-8 border border-white/5 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4"
              >
                <div className="mb-2 text-gold">{feat.icon}</div>
                <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider">
                  {feat.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed font-light">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-24 bg-cinematic-gray border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-8 block">
            Testimonials
          </span>

          <div className="relative min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center"
              >
                <p className="font-serif text-lg sm:text-2xl italic leading-relaxed text-white/90 max-w-3xl mb-8">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <h4 className="font-semibold text-gold tracking-wider uppercase text-sm">
                  {testimonials[activeTestimonial].author}
                </h4>
                <p className="text-xs text-white/40 mt-1 uppercase tracking-widest">
                  {testimonials[activeTestimonial].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-4 justify-center mt-10">
            <button
              onClick={prevTestimonial}
              className="p-3 border border-white/10 text-white/60 hover:text-gold hover:border-gold transition-all duration-300 rounded-none focus:outline-none"
              aria-label="Previous Testimonial"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 border border-white/10 text-white/60 hover:text-gold hover:border-gold transition-all duration-300 rounded-none focus:outline-none"
              aria-label="Next Testimonial"
            >
              <FaChevronRight size={14} />
            </button>
          </div>

        </div>
      </section>

      {/* 7. Final CTA Section */}
      <section className="py-24 bg-gradient-to-t from-black to-cinematic-black border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-6">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Ready To Bring Your <span className="text-gradient-gold">Story To Life?</span>
          </h2>
          <p className="text-white/60 font-light max-w-md mb-6 text-sm leading-relaxed">
            Let's collaborate to write, produce, and capture your custom creative message with premium visual excellence.
          </p>
          <Link
            to="/contact"
            className="bg-transparent border border-gold text-gold font-semibold uppercase tracking-wider text-sm py-4 px-10 rounded-none hover:bg-gold hover:text-black hover:shadow-gold-glow transition-all duration-300"
          >
            Let's Talk
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
