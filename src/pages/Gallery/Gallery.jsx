import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const filters = ["All", "BTS", "Directing", "Gear", "Lighting"];

  useDocumentTitle("Gallery");

  const images = [
    {
      url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
      caption: "RED V-Raptor rig details on set",
      category: "Gear"
    },
    {
      url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
      caption: "Checking drone height layouts at base camp",
      category: "Directing"
    },
    {
      url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
      caption: "High-contrast neon lighting setup under rails",
      category: "Lighting"
    },
    {
      url: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&auto=format&fit=crop",
      caption: "Anamorphic Cooke lens calibration",
      category: "Gear"
    },
    {
      url: "https://images.unsplash.com/photo-1542204172-e7052809aba5?q=80&w=800&auto=format&fit=crop",
      caption: "CGI tracking markers pre-visuals",
      category: "BTS"
    },
    {
      url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
      caption: "Foley sound recording desk layout",
      category: "BTS"
    },
    {
      url: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=800&auto=format&fit=crop",
      caption: "Elena setting up a tracking jib movement",
      category: "Directing"
    },
    {
      url: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop",
      caption: "Grip crews mounting light diffusion panels",
      category: "Lighting"
    }
  ];

  const filteredImages = activeFilter === "All"
    ? images
    : images.filter((img) => img.category === activeFilter);

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prevIndex) => {
      // Find the next image in the filtered list
      let nextIdx = (prevIndex + 1) % filteredImages.length;
      return nextIdx;
    });
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prevIndex) => {
      // Find the prev image in the filtered list
      let prevIdx = (prevIndex - 1 + filteredImages.length) % filteredImages.length;
      return prevIdx;
    });
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
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-xs uppercase tracking-[0.4em] text-gold font-semibold">
            Gallery Archive
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
            Production <span className="text-gradient-gold">Stills</span>
          </h1>
          <p className="text-white/60 font-light text-sm mt-4 leading-relaxed">
            Take a look behind the lens at our production process, filming equipment, and lighting setups.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setActiveImageIndex(null);
              }}
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

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={img.url}
                onClick={() => setActiveImageIndex(idx)}
                className="break-inside-avoid relative overflow-hidden bg-cinematic-gray border border-white/5 cursor-pointer group shadow-xl"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Information Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                  <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-semibold mb-1">
                    {img.category}
                  </span>
                  <p className="text-white/80 text-xs font-light leading-relaxed">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {activeImageIndex !== null && filteredImages[activeImageIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImageIndex(null)}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImageIndex(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors duration-300"
                aria-label="Close Lightbox"
              >
                <FaTimes size={28} />
              </button>

              {/* Navigation Left */}
              <button
                onClick={handlePrev}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-4 text-white/60 hover:text-gold transition-colors duration-300"
                aria-label="Previous Image"
              >
                <FaChevronLeft size={24} />
              </button>

              {/* Image Box */}
              <motion.div
                initial={{ scale: 0.95, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 10 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl max-h-[80vh] flex flex-col items-center justify-center bg-transparent cursor-default"
              >
                <img
                  src={filteredImages[activeImageIndex].url}
                  alt={filteredImages[activeImageIndex].caption}
                  className="max-w-full max-h-[70vh] object-contain border border-white/10 shadow-2xl"
                />
                <div className="text-center mt-4 px-4">
                  <p className="text-white text-sm font-light leading-relaxed max-w-lg">
                    {filteredImages[activeImageIndex].caption}
                  </p>
                  <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-medium mt-1 inline-block">
                    {filteredImages[activeImageIndex].category}
                  </span>
                </div>
              </motion.div>

              {/* Navigation Right */}
              <button
                onClick={handleNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-4 text-white/60 hover:text-gold transition-colors duration-300"
                aria-label="Next Image"
              >
                <FaChevronRight size={24} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}
