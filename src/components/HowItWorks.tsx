
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Remplissez les détails de votre histoire",
      description: "Ajoutez vos photos préférées, une date spéciale et un message personnalisé pour rendre ce cadeau unique."
    },
    {
      number: "2",
      title: "Payez pour votre site personnalisé",
      description: "Après votre paiement, recevez un QR code et votre site personnalisé avec trois photos et une musique, valable un an."
    },
    {
      number: "3",
      title: "Site personnalisé + QR Code",
      description: "Votre site unique est généré en moins d'une minute, prêt à être partagé avec un QR code exclusif."
    },
    {
      number: "4",
      title: "Surprenez vos proches",
      description: "Partagez ce cadeau digital et laissez les émotions parler d'elles-mêmes. Un souvenir qui touche le cœur."
    }
  ];
  
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center gradient-text">
        Comment Ça Marche ?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="love-card p-6 h-full">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
            
            {/* Connecting line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 transform -translate-x-4"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
