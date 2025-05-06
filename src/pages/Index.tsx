
import React from 'react';
import Header from '@/components/Header';
import FeatureHighlights from '@/components/FeatureHighlights';
import HowItWorks from '@/components/HowItWorks';
import CreationForm from '@/components/CreationForm';
import PhotoGallery from '@/components/PhotoGallery';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <FeatureHighlights />
        <HowItWorks />
        <CreationForm />
        <PhotoGallery />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
