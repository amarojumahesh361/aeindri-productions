import { motion } from "framer-motion";
import { 
  FaCamera, 
  FaVideo, 
  FaHeart, 
  FaBriefcase, 
  FaBoxOpen, 
  FaPaperPlane, 
  FaCalendarAlt, 
  FaShareAlt,
  FaComments,
  FaFileSignature,
  FaFilm,
  FaCheckCircle
} from "react-icons/fa";
import { Link } from "react-router-dom";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Services() {
  useDocumentTitle("Our Services");

  const serviceList = [
    {
      icon: <FaCamera className="text-gold text-3xl" />,
      title: "Photography",
      desc: "Editorial portraiture, high-fashion portfolios, and advertising campaign capture with luxury staging."
    },
    {
      icon: <FaVideo className="text-gold text-3xl" />,
      title: "Videography",
      desc: "High-definition creative films, color-graded visual assets, and high-fidelity video sets."
    },
    {
      icon: <FaHeart className="text-gold text-3xl" />,
      title: "Wedding Films",
      desc: "Premium, emotional wedding documentaries capturing your stories with film-like elegance."
    },
    {
      icon: <FaBriefcase className="text-gold text-3xl" />,
      title: "Corporate Films",
      desc: "Polished brand introductions, narrative corporate profiles, and industrial showcase documentaries."
    },
    {
      icon: <FaBoxOpen className="text-gold text-3xl" />,
      title: "Product Shoots",
      desc: "Luxurious, high-contrast imagery and macro videos designed for commercial luxury goods."
    },
    {
      icon: <FaPaperPlane className="text-gold text-3xl" />,
      title: "Drone Cinematography",
      desc: "Stunning 4K aerial shots and dynamic mapping sweeps captured by licensed drone pilots."
    },
    {
      icon: <FaCalendarAlt className="text-gold text-3xl" />,
      title: "Event Coverage",
      desc: "Immersive multi-camera documentation of grand openings, live concerts, and premium events."
    },
    {
      icon: <FaShareAlt className="text-gold text-3xl" />,
      title: "Social Media Content",
      desc: "Fast, highly engaging short-form reels and aesthetic video assets optimized for social platforms."
    }
  ];

  const processSteps = [
    {
      step: "Step 01",
      icon: <FaComments className="text-gold text-2xl" />,
      title: "Consultation",
      desc: "We discuss your creative brief, aesthetic requirements, and project scope over coffee or call."
    },
    {
      step: "Step 02",
      icon: <FaFileSignature className="text-gold text-2xl" />,
      title: "Planning",
      desc: "From scriptboarding, casting directors, and location scouting to storyboard composition."
    },
    {
      step: "Step 03",
      icon: <FaFilm className="text-gold text-2xl" />,
      title: "Production",
      desc: "Deploying high-end gear and dedicated lighting sets to capture each visual sequence cleanly."
    },
    {
      step: "Step 04",
      icon: <FaCheckCircle className="text-gold text-2xl" />,
      title: "Delivery",
      desc: "Polishing assets in color-mastering suites, foley sound layering, and outputting up to 8K."
    }
  ];

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
        staggerChildren: 0.12
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-cinematic-black min-h-screen text-white"
    >
      {/* 1. Hero Section */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/75 to-cinematic-black z-10" />
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop"
            alt="Cinematic gear and lighting setup"
            className="w-full h-full object-cover opacity-30 filter grayscale"
          />
        </div>
        <div className="relative z-20 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-gold font-medium mb-3 block"
          >
            Aeindri Productions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-4xl sm:text-6xl font-bold tracking-tight"
          >
            Our <span className="text-gradient-gold">Services</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. Service Cards Grid */}
      <section className="py-24 bg-cinematic-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              Cinematic Solutions
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {serviceList.map((service, idx) => (
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

      {/* 3. Process Section */}
      <section className="py-24 bg-cinematic-gray border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              Work Flow
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              Our Creative Process
            </h2>
            <p className="text-white/50 text-xs font-light">
              How we translate raw visual concepts into premium outputs.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step, idx) => (
              <motion.div
                variants={fadeInUp}
                key={idx}
                className="bg-cinematic-black p-8 border border-white/5 hover:border-gold/20 transition-all duration-300 flex flex-col gap-4 relative"
              >
                <span className="absolute top-4 right-4 font-serif text-4xl font-bold text-gold/15">
                  {step.step.split(" ")[1]}
                </span>
                <div className="mb-2 text-gold">{step.icon}</div>
                <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider">
                  {step.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed font-light">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="py-24 bg-gradient-to-t from-black to-cinematic-black text-center">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-6">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Ready to Start Your <span className="text-gradient-gold">Visual Project?</span>
          </h2>
          <p className="text-white/60 font-light max-w-md mb-6 text-sm leading-relaxed">
            Discuss your screenplay, product campaigns, or commercial coverage ideas with our team.
          </p>
          <Link
            to="/contact"
            className="bg-transparent border border-gold text-gold font-semibold uppercase tracking-wider text-sm py-4 px-10 rounded-none hover:bg-gold hover:text-black hover:shadow-gold-glow transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
