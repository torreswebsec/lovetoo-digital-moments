
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Header = () => {
  const scrollToForm = () => {
    document.getElementById('creation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
      
      <div className="container mx-auto px-4 z-10 py-20 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif gradient-text animate-text-shimmer bg-[linear-gradient(110deg,#8B5CF6,45%,#0EA5E9,55%,#8B5CF6)] bg-[length:200%_100%]">
          Surprenez votre amour
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-foreground/90 font-medium">
          Créez un cadeau digital unique avec un compteur de temps, des photos 
          et un message spécial pour votre moitié.
        </p>
        
        <Button 
          onClick={scrollToForm}
          size="lg" 
          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all group"
        >
          Commencez Maintenant
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
    </header>
  );
};

export default Header;
