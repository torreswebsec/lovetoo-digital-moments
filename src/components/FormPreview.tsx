
import React, { useState, useEffect } from 'react';

interface FormPreviewProps {
  formData: {
    nomCouple: string;
    dateRelation: string;
    timeRelation: string;
    message: string;
    meetingStory: string;
    youtubeLink: string;
    photos: (File | null)[];
  };
}

const FormPreview = ({ formData }: FormPreviewProps) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [daysCount, setDaysCount] = useState<string>("0 jours, 0 heures, 0 minutes");
  
  // Update counter
  useEffect(() => {
    if (formData.dateRelation && formData.timeRelation) {
      const startDate = new Date(`${formData.dateRelation}T${formData.timeRelation}`);
      
      const updateCounter = () => {
        const now = new Date();
        const diffMs = now.getTime() - startDate.getTime();
        if (diffMs > 0) {
          const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
          const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
          setDaysCount(`${diffDays} jours, ${diffHours} heures, ${diffMinutes} minutes`);
        } else {
          setDaysCount("0 jours, 0 heures, 0 minutes");
        }
      };
      
      updateCounter();
      const interval = setInterval(updateCounter, 60000);
      return () => clearInterval(interval);
    }
  }, [formData.dateRelation, formData.timeRelation]);
  
  // Cycle through photos
  useEffect(() => {
    const validPhotos = formData.photos.filter(p => p !== null);
    if (validPhotos.length > 1) {
      const interval = setInterval(() => {
        setActivePhotoIndex(prev => (prev + 1) % validPhotos.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [formData.photos]);
  
  // Get photo URLs
  const photoUrls = formData.photos
    .filter((photo): photo is File => photo !== null)
    .map(photo => URL.createObjectURL(photo));
  
  return (
    <div className="love-card overflow-hidden relative">
      {/* Browser UI */}
      <div className="bg-background p-3 flex items-center space-x-2 border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 bg-card/70 rounded text-xs py-1 px-3 text-center text-muted-foreground truncate">
          {formData.nomCouple 
            ? `https://lovetoo.ch/${formData.nomCouple.toLowerCase().replace(/\s+/g, '')}` 
            : "https://lovetoo.ch/"}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Floating elements */}
        {Array(6).fill(null).map((_, i) => (
          <div 
            key={i}
            className="absolute w-4 h-4 text-primary animate-float opacity-70"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {i % 2 === 0 ? '❤️' : '✨'}
          </div>
        ))}
      
        {/* Title */}
        {formData.nomCouple ? (
          <h2 className="text-2xl md:text-3xl font-bold text-center font-serif gradient-text mb-4">
            {formData.nomCouple}
          </h2>
        ) : (
          <h2 className="text-2xl md:text-3xl font-bold text-center font-serif gradient-text mb-4">
            Aperçu de Votre Cadeau Digital
          </h2>
        )}
        
        {/* Counter */}
        <div className="bg-card/50 border border-primary/30 rounded-lg p-4 text-center animate-pulse-soft">
          <p className="font-medium">Ensemble depuis : {daysCount} 🎉</p>
        </div>
        
        {/* Photos */}
        {photoUrls.length > 0 && (
          <div className="w-64 h-80 mx-auto relative rounded-xl overflow-hidden border-2 border-white/20 shadow-lg">
            {photoUrls.map((url, index) => (
              <img 
                key={index}
                src={url} 
                alt={`Photo ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === activePhotoIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Message */}
        {formData.message && (
          <div className="bg-card/50 border-l-4 border-primary p-4 rounded-r-lg">
            <p className="italic">{formData.message}</p>
          </div>
        )}
        
        {/* Story */}
        {formData.meetingStory && (
          <div className="bg-card/50 border-l-4 border-secondary p-4 rounded-r-lg">
            <p>{formData.meetingStory}</p>
          </div>
        )}
        
        {/* Music */}
        {formData.youtubeLink && (
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Musique:</p>
            <p className="text-primary/90 break-all">{formData.youtubeLink}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormPreview;
