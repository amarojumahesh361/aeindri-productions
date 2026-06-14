import { motion } from "framer-motion";
import { 
  FaLightbulb, 
  FaAward, 
  FaFingerprint, 
  FaBrain, 
  FaBullseye, 
  FaEye, 
  FaRegDotCircle 
} from "react-icons/fa";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function About() {
  useDocumentTitle("About Us");

  const coreValues = [
    {
      icon: <FaLightbulb className="text-gold text-3xl" />,
      title: "Creativity",
      desc: "Pushing narrative boundaries to tell stories that resonate on a deeply human and artistic level."
    },
    {
      icon: <FaAward className="text-gold text-3xl" />,
      title: "Excellence",
      desc: "Upholding absolute precision in cinematography, lighting control, scoring, and post-production rendering."
    },
    {
      icon: <FaFingerprint className="text-gold text-3xl" />,
      title: "Authenticity",
      desc: "Remaining true to original cinematic expressions, keeping visual elements honest and impactful."
    },
    {
      icon: <FaBrain className="text-gold text-3xl" />,
      title: "Innovation",
      desc: "Deploying next-gen camera rigs, HDR workflows, and CGI virtual sets to redefine modern storytelling."
    }
  ];

  const team = [
    {
      name: "Aarav Sharma",
      role: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
      bio: "Over a decade directing award-winning narrative films and luxury advertising campaigns globally."
    },
    {
      name: "Elena Rostova",
      role: "Director of Photography",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      bio: "Specialist in anamorphic capture, natural light manipulation, and high-end visual aesthetics."
    },
    {
      name: "Nikhil Verma",
      role: "Post-Production Supervisor",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
      bio: "CGI environment designer and master colorist with a focus on immersive visual effects."
    }
  ];

  const timeline = [
    {
      stage: "Foundation",
      year: "2018",
      title: "The Vision Spark",
      desc: "Established in Mumbai with a single camera, a small studio room, and a grand dream of bringing world-class cinematic styling to local stories."
    },
    {
      stage: "Growth",
      year: "2021",
      title: "Creative Scaling",
      desc: "Expanding our operations into national brand commercials, establishing a dedicated sound stage, and selecting crew directors from film schools."
    },
    {
      stage: "Major Projects",
      year: "2024",
      title: "National & Global Acclaim",
      desc: "Winning best cinematography selection at short film forums, and introducing HDR DaVinci suites for high-end color mastering."
    },
    {
      stage: "Future Vision",
      year: "2026 & Beyond",
      title: "Virtual Production Horizon",
      desc: "Deploying modular LED screen volumes and real-time Unreal Engine rendering, changing how we construct sets and film environments."
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
      className="bg-cinematic-black min-h-screen text-white"
    >
      {/* 1. Hero Banner */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/75 to-cinematic-black z-10" />
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1470&auto=format&fit=crop"
            alt="Cinematic production set"
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
            About <span className="text-gradient-gold">Aeindri Productions</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. Company Story */}
      <section className="py-24 bg-cinematic-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col gap-6"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              Crafting Visual Masterpieces Since <span className="text-gradient-gold">2018</span>
            </h2>
            <p className="text-white/70 font-light leading-relaxed text-sm">
              Aeindri Productions began as a dream to create artistic narratives that linger in the mind long after the screen goes dark. Over the years, we have transitioned from a boutique cinematography house into an end-to-end premium production firm.
            </p>
            <p className="text-white/60 font-light leading-relaxed text-sm">
              We approach filmmaking with a designer's eye and a technician's precision. Whether we are directing a commercial campaign for a luxury brand or framing a long-form independent feature, we commit to absolute aesthetic excellence.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold/5 pointer-events-none" />
            <img
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop"
              alt="Directors looking at monitors"
              className="w-full object-cover aspect-video border border-white/10 shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 bg-cinematic-gray border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-cinematic-black p-10 border border-white/5 relative flex flex-col gap-4 shadow-xl"
          >
            <div className="text-gold mb-2">
              <FaBullseye size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold uppercase tracking-wider text-white">
              Our Mission
            </h3>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              To bring raw, imaginative concepts into vivid, high-fidelity focus. We empower brands, directors, and creators by providing complete production resources and artistic direction to tell authentic stories.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-cinematic-black p-10 border border-white/5 relative flex flex-col gap-4 shadow-xl"
          >
            <div className="text-gold mb-2">
              <FaEye size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold uppercase tracking-wider text-white">
              Our Vision
            </h3>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              To be globally recognized as a gold standard in luxury cinematic storytelling, leveraging next-gen tools like real-time CGI rendering to change how stories are crafted, captured, and shared.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-24 bg-cinematic-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              What Guides Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              Our Core Principles
            </h2>
            <p className="text-white/50 text-xs font-light">
              These fundamental guidelines direct our camera movement, storytelling pacing, and team values.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {coreValues.map((value, idx) => (
              <motion.div
                variants={fadeInUp}
                key={idx}
                className="bg-cinematic-gray p-8 border border-white/5 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4"
              >
                <div className="mb-2">{value.icon}</div>
                <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider">
                  {value.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed font-light">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 5. Team Section */}
      <section className="py-24 bg-cinematic-gray border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              The Creators
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              The Creative Minds
            </h2>
            <p className="text-white/50 text-xs font-light">
              Collaborating across directors, camera crews, and CGI workstations.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {team.map((member, idx) => (
              <motion.div
                variants={fadeInUp}
                key={idx}
                className="flex flex-col gap-4 group"
              >
                <div className="overflow-hidden border border-white/5 relative aspect-[3/4] bg-black">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-xs text-gold font-semibold tracking-wider uppercase mb-1">
                      {member.role}
                    </p>
                    <p className="text-white/80 text-xs leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold tracking-wide text-white group-hover:text-gold transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-xs text-white/40 uppercase tracking-widest mt-1">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 6. Journey Timeline */}
      <section className="py-24 bg-cinematic-black">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              Our Path
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              Journey Timeline
            </h2>
            <p className="text-white/50 text-xs font-light">
              From our early visual concepts to the future boundaries of cinema.
            </p>
          </div>

          <div className="relative border-l border-gold/30 ml-4 md:ml-32 pl-8 space-y-12">
            {timeline.map((step, idx) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                key={idx}
                className="relative group"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[41px] top-1 bg-cinematic-black p-1.5 text-gold border border-gold/40 rounded-full group-hover:bg-gold group-hover:text-black transition-colors duration-300 z-10">
                  <FaRegDotCircle size={12} />
                </div>

                {/* Date tag floating to left on desktop */}
                <div className="hidden md:block absolute -left-40 top-0 text-right w-28">
                  <span className="text-xl font-serif font-bold text-gold/50 group-hover:text-gold transition-colors duration-300">
                    {step.year}
                  </span>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">
                    {step.stage}
                  </p>
                </div>

                {/* Card Container */}
                <div className="bg-cinematic-gray border border-white/5 p-8 group-hover:border-gold/30 hover:shadow-gold-glow transition-all duration-300">
                  <span className="md:hidden text-gold font-bold text-sm block mb-1">
                    {step.year} - {step.stage}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-xs font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </motion.div>
  );
}
