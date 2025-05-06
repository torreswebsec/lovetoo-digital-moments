
import React, { useState } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Qu'est-ce que Lovetoo ?",
      answer: "Lovetoo est une plateforme dédiée aux couples et à toutes les personnes qui souhaitent offrir un cadeau original et plein d'émotion. Créez une page personnalisée avec des photos, un message spécial et un compteur de jours ensemble. Recevez un QR code unique à partager ou imprimer, pour surprendre votre moitié d'une manière douce, moderne et inoubliable. 💖 Un souvenir digital qui touche le cœur."
    },
    {
      question: "Quels sont les moyens de paiement acceptés ?",
      answer: "Nous acceptons tous les paiements."
    },
    {
      question: "Combien de temps cela prend-il?",
      answer: "Une fois le paiement confirmé, vous recevrez votre page personnalisée en moins d'une minute."
    },
    {
      question: "Qui peut voir ma page?",
      answer: "Votre page possède un lien unique personnalisé avec le nom du couple. Seuls vous et les personnes avec qui vous partagez ce lien peuvent y accéder."
    },
    {
      question: "La page a-t-elle une validité?",
      answer: "Oui, votre page est valable pour 1 an."
    },
    {
      question: "Entrer en contact?",
      answer: "Avez-vous des questions concernant notre plateforme? contactez-nous par e-mail -> contact@lovetoo.ch"
    },
    {
      question: "Quels sont les réseaux sociaux officiels Lovetoo?",
      answer: "Suivez nos réseaux sociaux -> TikTok & Instagram -> Lovetoo.ch"
    }
  ];
  
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center gradient-text">
        Questions Fréquentes
      </h2>
      
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border bg-card/50 rounded-lg px-2"
            >
              <AccordionTrigger className="text-left font-semibold py-4 hover:no-underline hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
