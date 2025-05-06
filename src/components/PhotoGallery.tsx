
import React from 'react';

const PhotoGallery = () => {
  // Placeholder image paths - in a real implementation, these would be imported properly
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
  
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-serif gradient-text">
          Des idées devenues virales 💕
        </h2>
        
        <div className="overflow-hidden relative">
          <div className="flex animate-slide">
            {images.map((image, index) => (
              <div key={index} className="min-w-[250px] sm:min-w-[300px] p-3">
                <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white/10 transform transition-transform hover:scale-[1.02]">
                  <img 
                    src={image} 
                    alt={`Exemple ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
