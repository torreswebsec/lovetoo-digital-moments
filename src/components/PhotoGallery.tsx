
import React from 'react';

const PhotoGallery = () => {
  // Sample image paths for the gallery
  const images = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    // Duplicate for continuous loop
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
  ];
  
  // Emoji decorations to add a playful feel
  const emojis = ['💕', '💖', '✨', '💫', '🌟', '💘', '💞', '💓', '💗'];
  
  return (
    <div className="container mx-auto py-20 px-6">
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl p-10 border-2 border-primary/30 shadow-xl relative overflow-hidden">
        {/* Decorative elements */}
        {emojis.map((emoji, index) => (
          <span 
            key={index}
            className="absolute text-2xl md:text-3xl animate-pulse opacity-70"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
              animationDelay: `${index * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {emoji}
          </span>
        ))}
        
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center font-serif gradient-text">
          Des idées devenues virales 💕
        </h2>
        
        <div className="overflow-hidden relative">
          <div className="flex animate-slide">
            {images.map((image, index) => (
              <div key={index} className="min-w-[280px] sm:min-w-[340px] p-4">
                <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 bg-card/50 transform transition-all hover:scale-105 hover:shadow-primary/40 hover:shadow-lg">
                  <img 
                    src={image} 
                    alt={`Exemple ${index + 1}`}
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-lg italic">
            Découvrez comment d'autres ont surpris leurs proches avec Lovetoo ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
