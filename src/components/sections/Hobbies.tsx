import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { FluidDisplay, FluidCard } from "@/components/ui/fluid-display";

interface FloatingItem {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  link?: string;
}

interface HobbyCardProps {
  title: string;
  icon: string;
  items: FloatingItem[];
  type: 'books' | 'photography' | 'music';
  delay: number;
}

const Hobbies = () => {
  const [focusedItem, setFocusedItem] = useState<FloatingItem | null>(null);
  const [focusedType, setFocusedType] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllBooks, setShowAllBooks] = useState(false);
  const [showSpotifyEmbed, setShowSpotifyEmbed] = useState(false);

  const allBooks = [
    "Harry Potter Series", "Ponniyin Selvan", "Crooked House", "Origin", 
    "Death in the Nile", "Angels and Demons", "Atomic Habits", 
    "The Da Vinci Code", "Secrets of Secrets", "And Then There Were None", 
    "Five Little Pigs", "Murder on the Orient Express"
  ];

  const hobbiesData = [
    {
      title: "Reading Books",
   
      type: 'books' as const,
      items: [
        {
          id: "book1",
          image: "/atomic_habits.jpg",
          title: "Atomic Habits",
          subtitle: "James Clear",
          description: "An easy & proven way to build good habits & break bad ones"
        },
        {
          id: "book2",
          image: "/harry potter.jpg",
          title: "Harry Potter Series",
          subtitle: "J.K. Rowling",
          description: "The magical world of wizardry and adventure"
        },
        {
          id: "book3",
          image: "/da vinci.jpg",
          title: "The Da Vinci Code",
          subtitle: "Dan Brown",
          description: "A thrilling mystery combining art, history, and conspiracy"
        },
        {
          id: "book4",
          image: "/murder on the orient express.jpg",
          title: "Murder on the Orient Express",
          subtitle: "Agatha Christie",
          description: "Classic detective mystery with Hercule Poirot"
        }
      ]
    },
    {
      title: "Photography",
     
      type: 'photography' as const,
      items: [
        {
          id: "photo1",
          image: "/1.jpeg",
          title: "Cat",
          description: "Adorable feline moments captured"
        },
        {
          id: "photo2",
          image: "/2.jpeg",
          title: "Falls",
          description: "The power and beauty of waterfalls"
        },
        {
          id: "photo3",
          image: "/3.jpeg",
          title: "Mountains & Lakes",
          description: "Serene landscapes where mountains meet water"
        },
        {
          id: "photo4",
          image: "/4.jpeg",
          title: "Forest Paths",
          description: "Finding peace in nature's corridors"
        }
      ]
    },
    {
      title: "Music",
    
      type: 'music' as const,
      items: [
        {
          id: "playlist1",
          image: "/arijit.jpg",
          title: "Arijit Singh",
          subtitle: "Bollywood Romance",
          description: "Soulful melodies and romantic ballads",
          link: "https://open.spotify.com/playlist/5oSwy0Ud5P1Crli3YX2FJn?trackId=7G5wpuR61ABrT7R1snos7C"
        },
        {
          id: "playlist2",
          image: "/english.jpg",
          title: "English Vibes",
          subtitle: "International Hits",
          description: "Popular English songs and chart-toppers",
          link: "https://open.spotify.com/playlist/1zmWcHrlmU4neQcaXU3WQL?trackId=7G5wpuR61ABrT7R1snos7C"
        },
        {
          id: "playlist3",
          image: "/kollywood.jpg",
          title: "Kollywood Hits",
          subtitle: "Tamil Cinema",
          description: "Best of Tamil movie soundtracks",
          link: "https://open.spotify.com/playlist/0uttzXgTP5BoyWKYERva9K?trackId=7G5wpuR61ABrT7R1snos7C"
        }
      ]
    }
  ];
  const FloatingImage = ({ item, index, type }: { item: FloatingItem; index: number; type: string }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
    const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

    return (
      <motion.div
        layoutId={`${type}-${item.id}`}
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
        }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.2,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        whileHover={{ 
          scale: 1.05, 
          y: -8,
          transition: { type: "spring", stiffness: 400, damping: 25 }
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          mouseX.set(e.clientX - centerX);
          mouseY.set(e.clientY - centerY);
        }}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
        }}
        onClick={() => {
          setFocusedItem(item);
          setFocusedType(type);
          if (type === 'photography') {
            const items = hobbiesData.find(h => h.type === 'photography')?.items || [];
            setCurrentImageIndex(items.findIndex(i => i.id === item.id));
          }
        }}
        className="cursor-pointer group"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 1, -1, 0]
          }}
          transition={{
            duration: 6 + index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3
          }}
          className="relative"
        >
          <div className="relative w-48 h-64 rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 dark:from-white/10 dark:to-black/20" />
            
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                {item.subtitle && (
                  <p className="text-xs opacity-80">{item.subtitle}</p>
                )}
              </div>
            </div>

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 via-purple-400/10 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
      </motion.div>
    );
  };
  const HobbyCard = ({ title, icon, items, type, delay }: HobbyCardProps) => (
    <FluidCard delay={delay} className="relative overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent dark:from-white/5 dark:via-white/2 dark:to-transparent border border-white/20 dark:border-white/10 rounded-3xl" />
      
      <div className="relative p-8">
        <div className="flex items-center gap-4 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 min-h-[400px] place-items-center">
          {items.map((item, index) => (
            <FloatingImage 
              key={item.id} 
              item={item} 
              index={index} 
              type={type}
            />
          ))}
        </div>

        {type === 'books' && (
          <div className="mt-8 text-center">
            <motion.button
              onClick={() => setShowAllBooks(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl font-semibold shadow-lg backdrop-blur-sm flex items-center gap-2 mx-auto"
            >
              View All Books ({allBooks.length})
            </motion.button>
          </div>
        )}

        {type === 'music' && (
          <div className="mt-8 text-center">
            <motion.button
              onClick={() => setShowSpotifyEmbed(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl font-semibold shadow-lg backdrop-blur-sm flex items-center gap-2 mx-auto"
            >
              <ExternalLink size={16} />
              Listen to My Playlists
            </motion.button>
          </div>
        )}
      </div>
    </FluidCard>
  );
  const SpotifyModal = () => {
    if (!showSpotifyEmbed) return null;

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowSpotifyEmbed(false)}
        >
          <motion.div
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(20px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
            className="absolute inset-0 bg-black/50 dark:bg-black/70"
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative backdrop-blur-2xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl p-8">
              <button
                onClick={() => setShowSpotifyEmbed(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">My Music Taste</h3>
                <p className="text-gray-300">Explore my favorite playlists on Spotify</p>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 dark:bg-white/5 rounded-2xl p-6 border border-white/20 dark:border-white/10">
                  <h4 className="text-xl font-semibold text-white mb-4">My Spotify Profile</h4>
                  <iframe 
                    src="https://open.spotify.com/embed/user/a703q3cqpehosvzshigmwuct1?utm_source=generator&theme=0" 
                    width="100%" 
                    height="352" 
                    frameBorder="0" 
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    className="rounded-xl"
                  ></iframe>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/10 dark:bg-white/5 rounded-2xl p-4 border border-white/20 dark:border-white/10 text-center">
                    <h5 className="text-white font-semibold mb-2">Arijit Singh</h5>
                    <p className="text-gray-300 text-sm">Bollywood Romance</p>
                  </div>
                  <div className="bg-white/10 dark:bg-white/5 rounded-2xl p-4 border border-white/20 dark:border-white/10 text-center">
                    <h5 className="text-white font-semibold mb-2">English Vibes</h5>
                    <p className="text-gray-300 text-sm">International Hits</p>
                  </div>
                  <div className="bg-white/10 dark:bg-white/5 rounded-2xl p-4 border border-white/20 dark:border-white/10 text-center">
                    <h5 className="text-white font-semibold mb-2">Kollywood Hits</h5>
                    <p className="text-gray-300 text-sm">Tamil Cinema</p>
                  </div>
                </div>

                <div className="text-center">
                  <motion.a
                    href="https://open.spotify.com/user/a703q3cqpehosvzshigmwuct1"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl font-semibold shadow-lg"
                  >
                    <ExternalLink size={16} />
                    Open in Spotify
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  const BooksModal = () => {
    if (!showAllBooks) return null;

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowAllBooks(false)}
        >
          <motion.div
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(20px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
            className="absolute inset-0 bg-black/50 dark:bg-black/70"
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative backdrop-blur-2xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl p-8">
              <button
                onClick={() => setShowAllBooks(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">My Reading Journey</h3>
                <p className="text-gray-300">Books that have shaped my perspective</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allBooks.map((book, index) => (
                  <motion.div
                    key={book}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-white/10 dark:bg-white/5 rounded-2xl border border-white/20 dark:border-white/10"
                  >
                    <span className="text-white font-medium">{book}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-300 text-sm">
                  {allBooks.length} books and counting...
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  const Lightbox = () => {
    if (!focusedItem || !focusedType) return null;

    const isPhotography = focusedType === 'photography';
    const photographyItems = hobbiesData.find(h => h.type === 'photography')?.items || [];

    const navigateImage = (direction: 'prev' | 'next') => {
      if (!isPhotography) return;
      
      const newIndex = direction === 'next' 
        ? (currentImageIndex + 1) % photographyItems.length
        : (currentImageIndex - 1 + photographyItems.length) % photographyItems.length;
      
      setCurrentImageIndex(newIndex);
      setFocusedItem(photographyItems[newIndex]);
    };

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => {
            setFocusedItem(null);
            setFocusedType(null);
          }}
        >
          <motion.div
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(20px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
            className="absolute inset-0 bg-black/50 dark:bg-black/70"
          />

          <motion.div
            layoutId={`${focusedType}-${focusedItem.id}`}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative backdrop-blur-2xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <button
                onClick={() => {
                  setFocusedItem(null);
                  setFocusedType(null);
                }}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-colors"
              >
                <X size={20} />
              </button>

              {isPhotography && photographyItems.length > 1 && (
                <>
                  <button
                    onClick={() => navigateImage('prev')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => navigateImage('next')}
                    className="absolute right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-colors"
                  >
                    →
                  </button>
                </>
              )}

              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <img 
                      src={focusedItem.image} 
                      alt={focusedItem.title}
                      className="w-full h-auto max-h-[60vh] object-cover rounded-2xl"
                    />
                  </div>

                  <div className="flex-1 lg:max-w-md">
                    <h3 className="text-3xl font-bold text-white mb-2">{focusedItem.title}</h3>
                    {focusedItem.subtitle && (
                      <p className="text-xl text-gray-300 mb-4">{focusedItem.subtitle}</p>
                    )}
                    {focusedItem.description && (
                      <p className="text-gray-200 mb-6 leading-relaxed">{focusedItem.description}</p>
                    )}
                    {focusedItem.link && (
                      <motion.a
                        href={focusedItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-semibold shadow-lg"
                      >
                        <ExternalLink size={16} />
                        Open Link
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };
  return (
    <section id="hobbies" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <FluidDisplay>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full shadow-ios mb-6">
              <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold">Beyond Code</span>
            </div>
            <h2 className="ios-large-title mb-6 text-gray-900 dark:text-gray-100">
              My Hobbies & Interests
            </h2>
            <p className="ios-body text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              When I'm not coding, you'll find me exploring these passions that fuel my creativity and keep me inspired.
            </p>
          </div>
        </FluidDisplay>

        <div className="grid lg:grid-cols-3 gap-8">
          {hobbiesData.map((hobby, index) => (
            <HobbyCard
                  key={hobby.type}
                  title={hobby.title}

                  items={hobby.items}
                  type={hobby.type}
                  delay={0.2 + index * 0.1} icon={""}            />
          ))}
        </div>

        {focusedItem && <Lightbox />}
        {showAllBooks && <BooksModal />}
        {showSpotifyEmbed && <SpotifyModal />}
      </div>
    </section>
  );
};

export default Hobbies;