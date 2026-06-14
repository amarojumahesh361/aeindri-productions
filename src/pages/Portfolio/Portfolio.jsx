import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filters = ["All", "Photography", "Videography", "Corporate", "Events", "Commercial"];

  useDocumentTitle("Portfolio");

  const projects = [
    {
      id: 1,
      title: "Silent Horizon",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
      year: "2025",
      client: "Editorial Magazine",
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U"
    },
    {
      id: 2,
      title: "Zenith Car Launch",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop",
      year: "2024",
      client: "Zenith Motors",
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U"
    },
    {
      id: 3,
      title: "Corporate Identity Stills",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=800&auto=format&fit=crop",
      year: "2024",
      client: "Aura Global",
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U"
    },
    {
      id: 4,
      title: "Urban Rhythms",
      category: "Videography",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      year: "2025",
      client: "Sony Music",
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U"
    },
    {
      id: 5,
      title: "Global Summit 2024",
      category: "Events",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
      year: "2024",
      client: "TechCon Org",
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U"
    },
    {
      id: 6,
      title: "Elysian Fragrance Ad",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop",
      year: "2024",
      client: "Elysian Labs",
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U"
    },
    {
      id: 7,
      title: "The Silent Peak Journey",
      category: "Videography",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
      year: "2023",
      client: "Travel Channel",
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U"
    },
    {
      id: 8,
      title: "Industrial Operations Setup",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      year: "2024",
      client: "Apex Industries",
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U"
    },
    {
      id: 9,
      title: "Grand Concert Spotlight",
      category: "Events",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800&auto=format&fit=crop",
      year: "2025",
      client: "Vibe Festival",
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U"
    }
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-cinematic-black min-h-screen py-16 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-xs uppercase tracking-[0.4em] text-gold font-semibold">
            Our Portfolio
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
            Creative <span className="text-gradient-gold">Showcases</span>
          </h1>
          <p className="text-white/60 font-light text-sm mt-4 leading-relaxed">
            Browse our selected visual works. Use the filter tags below to explore categories.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-none border transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gold text-black border-gold shadow-gold-glow"
                  : "bg-transparent text-white/60 border-white/10 hover:text-white hover:border-gold/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => setSelectedVideo(project.videoUrl)}
                className="group relative overflow-hidden bg-cinematic-gray border border-white/5 cursor-pointer aspect-[16/11]"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Hover Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-14 w-14 rounded-full border border-gold/40 flex items-center justify-center bg-black/60 text-gold shadow-gold-glow group-hover:scale-110 transition-transform duration-300">
                    <FaPlay size={16} className="ml-1" />
                  </div>
                </div>

                {/* Detail text */}
                <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end z-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-semibold">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white group-hover:text-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-white/40 font-light mt-0.5">
                      Client: {project.client}
                    </p>
                  </div>
                  <span className="font-serif text-sm text-white/50 tracking-wider">
                    {project.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Video Player Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors duration-300"
                aria-label="Close Project Media"
              >
                <FaTimes size={28} />
              </button>
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-5xl aspect-video bg-black shadow-2xl"
              >
                <iframe
                  title="Portfolio Showcase Video"
                  className="w-full h-full"
                  src={`${selectedVideo}?autoplay=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}
