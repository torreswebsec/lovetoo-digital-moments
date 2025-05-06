
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import FormPreview from '@/components/FormPreview';

const CreationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nomCouple: '',
    dateRelation: '',
    timeRelation: '',
    message: '',
    meetingStory: '',
    email: '',
    youtubeLink: '',
    photos: Array(3).fill(null),
  });
  
  const [selectedMusicIndex, setSelectedMusicIndex] = useState<number | null>(null);

  const musicOptions = [
    { title: "A Thousand Years - Teddy Swims", link: "https://youtu.be/tu27kSOEGE4" },
    { title: "Teddy Swims - Let Me Love You", link: "https://youtu.be/khdH-heeojU" },
    { title: "Teddy Swims - Devil in a Dress", link: "https://youtu.be/1el2U3f7Y18" },
    { title: "Sean Kingston - Beautiful Girls", link: "https://www.youtube.com/watch?v=MrTz5xjmso4" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMusicSelect = (index: number) => {
    setSelectedMusicIndex(index);
    setFormData(prev => ({ ...prev, youtubeLink: musicOptions[index].link }));
  };

  const handlePhotoChange = (index: number, file: File | null) => {
    const newPhotos = [...formData.photos];
    newPhotos[index] = file;
    setFormData(prev => ({ ...prev, photos: newPhotos }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Création en cours...",
      description: "Votre site personnalisé sera prêt sous peu.",
    });

    // The actual submission would use the checkout() function from the original code
    // This is a placeholder for demonstration
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="container mx-auto py-16 px-4" id="creation-form">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center gradient-text">
        Personnalisez Votre Site 🎉
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form Side */}
        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Label htmlFor="nomCouple">Nom du couple ou personne spécial</Label>
              <Input 
                id="nomCouple"
                name="nomCouple"
                value={formData.nomCouple}
                onChange={handleInputChange}
                placeholder="Nom du couple ou personne spécial"
                className="bg-card/50 border-border/50"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <Label htmlFor="dateRelation">Date</Label>
                <Input 
                  id="dateRelation"
                  name="dateRelation"
                  type="date"
                  value={formData.dateRelation}
                  onChange={handleInputChange}
                  className="bg-card/50 border-border/50"
                  required
                />
              </div>
              
              <div className="space-y-4">
                <Label htmlFor="timeRelation">Heure</Label>
                <Input 
                  id="timeRelation"
                  name="timeRelation"
                  type="time"
                  value={formData.timeRelation}
                  onChange={handleInputChange}
                  className="bg-card/50 border-border/50"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <Label htmlFor="message">Message spécial</Label>
              <Textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Écrivez un message spécial pour cette personne..."
                className="bg-card/50 border-border/50 min-h-[100px]"
                required
              />
            </div>
            
            <div className="space-y-4">
              <Label htmlFor="meetingStory">Anecdote ou souvenir spécial</Label>
              <Textarea 
                id="meetingStory"
                name="meetingStory"
                value={formData.meetingStory}
                onChange={handleInputChange}
                placeholder="Racontez une anecdote ou un souvenir spécial"
                className="bg-card/50 border-border/50"
                required
              />
            </div>
            
            <div className="space-y-4">
              <Label htmlFor="email">Votre e-mail</Label>
              <Input 
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Votre e-mail"
                className="bg-card/50 border-border/50"
                required
              />
            </div>
            
            <div className="space-y-4">
              <Label htmlFor="photos">Ajoutez 3 Photos Mémorables</Label>
              <p className="text-sm text-muted-foreground">
                Sélectionnez jusqu'à 3 photos qui capturent des moments précieux
              </p>
              
              <div className="flex flex-wrap gap-4 mt-2">
                {Array(3).fill(null).map((_, index) => (
                  <div 
                    key={index}
                    className="w-24 h-24 relative bg-card/50 border border-dashed border-primary/50 rounded-md flex items-center justify-center cursor-pointer overflow-hidden group"
                    onClick={() => document.getElementById(`photo-input-${index}`)?.click()}
                  >
                    <input 
                      id={`photo-input-${index}`}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        handlePhotoChange(index, file);
                      }}
                    />
                    
                    {formData.photos[index] ? (
                      <>
                        <img 
                          src={URL.createObjectURL(formData.photos[index] as File)} 
                          alt={`Photo ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-white text-sm">Changer</span>
                        </div>
                      </>
                    ) : (
                      <span className="text-2xl text-muted-foreground">+</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <Label>Choisissez une Musique 🎶</Label>
              <p className="text-sm text-muted-foreground">
                Ajoutez une touche émotionnelle avec une chanson qui représente votre lien
              </p>
              
              <div className="space-y-2 mt-2">
                {musicOptions.map((music, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-md flex items-center gap-3 cursor-pointer transition-all ${
                      selectedMusicIndex === index 
                        ? 'bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50' 
                        : 'bg-card/50 border border-border/50 hover:border-primary/50'
                    }`}
                    onClick={() => handleMusicSelect(index)}
                  >
                    <div className={`w-4 h-4 rounded-full ${
                      selectedMusicIndex === index 
                        ? 'bg-gradient-to-r from-primary to-secondary' 
                        : 'bg-muted'
                    }`}></div>
                    <span className={selectedMusicIndex === index ? 'font-medium' : ''}>
                      {music.title}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4">
                <Label htmlFor="youtubeLink">Ou insérez un lien YouTube personnalisé</Label>
                <Input 
                  id="youtubeLink"
                  name="youtubeLink"
                  value={formData.youtubeLink}
                  onChange={(e) => {
                    handleInputChange(e);
                    setSelectedMusicIndex(null);
                  }}
                  placeholder="https://youtube.com/watch?v=..."
                  className="bg-card/50 border-border/50 mt-2"
                />
              </div>
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 mt-6"
              size="lg"
            >
              Créer mon site € 15,00
            </Button>
          </form>
        </div>
        
        {/* Preview Side */}
        <div className="order-first lg:order-last">
          <FormPreview formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default CreationForm;
