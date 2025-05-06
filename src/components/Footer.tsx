
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-card pt-16 pb-8 text-center">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <img 
            src="/placeholder.svg" 
            alt="Logo Lovetoo" 
            className="w-24 h-24 object-contain mx-auto animate-pulse-soft"
          />
        </div>
        
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-serif mb-4 gradient-text font-semibold">
            Et si on préparait un cadeau surprise pour l'un de vos proches?
          </h3>
          <p className="text-muted-foreground">
            Ça prend moins de 5 minutes. Sérieusement!
          </p>
        </div>
        
        <div className="border-t border-border pt-8">
          <p className="font-semibold mb-2">Copyright © 2025 <span className="gradient-text">Lovetoo 🇨🇭</span></p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link to="/politique" className="text-muted-foreground hover:text-primary transition-colors">
              Loi GDPR et Politique
            </Link>
            <a 
              href="https://www.instagram.com/lovetoo.ch" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Lovetoo Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
