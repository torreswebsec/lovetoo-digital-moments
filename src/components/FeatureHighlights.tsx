
import React from 'react';
import { Clock, Image, MessageSquare, Music } from "lucide-react";

const FeatureHighlights = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Compteur Dynamique",
      description: "Suivez chaque moment précieux de votre relation avec un compteur en temps réel"
    },
    {
      icon: <Image className="h-8 w-8" />,
      title: "Photos Spéciales",
      description: "Ajoutez jusqu'à 3 photos qui représentent vos moments les plus mémorables"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Message Personnalisé",
      description: "Exprimez vos sentiments avec un message unique et personnel"
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Musique d'Ambiance",
      description: "Ajoutez votre chanson spéciale pour une expérience immersive"
    }
  ];
  
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="love-card glow-effect p-6 flex flex-col items-center text-center group"
          >
            <div className="mb-4 text-primary group-hover:text-secondary transition-colors">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureHighlights;
