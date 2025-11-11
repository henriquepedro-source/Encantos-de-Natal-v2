'use client';

import { useEffect, useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';

const names = [
  'Maria', 'Ana', 'Francisca', 'Antônia', 'Adriana', 'Juliana', 'Marcia', 'Fernanda',
  'Patricia', 'Aline', 'Sandra', 'Camila', 'Amanda', 'Bruna', 'Jéssica', 'Leticia',
  'João', 'José', 'Antônio', 'Francisco', 'Carlos', 'Paulo', 'Pedro', 'Lucas',
  'Luiz', 'Marcos', 'Gabriel', 'Rafael', 'Daniel', 'Marcelo'
];

const getRandomName = () => names[Math.floor(Math.random() * names.length)];

export function SocialProof() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentName, setCurrentName] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCurrentName(getRandomName());

    const initialShow = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    const showInterval = setInterval(() => {
      setCurrentName(getRandomName());
      setIsVisible(true);
      
      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Hide after 5 seconds

    }, 15000); // Show every 15 seconds

    return () => {
      clearTimeout(initialShow);
      clearInterval(showInterval);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 flex items-center gap-4 rounded-lg bg-background p-4 shadow-lg border border-border transition-all duration-500 transform ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="flex-shrink-0">
        <div className="p-2 bg-primary/10 rounded-full">
          <ShoppingCart className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div>
        <p className="font-bold text-sm text-foreground">{currentName} acabou de comprar!</p>
        <p className="text-xs text-muted-foreground">O e-book "Encantos de Natal" (+100 ideias)</p>
      </div>
      <button onClick={() => setIsVisible(false)} className="absolute top-2 right-2 text-muted-foreground hover:text-foreground">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
