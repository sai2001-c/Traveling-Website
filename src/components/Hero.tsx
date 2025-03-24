
import React from 'react';
import { Button } from '@/components/ui/button';
import { useDestinationSlideshow } from '@/hooks/useDestinationSlideshow';

const Hero = () => {
  const { currentDestination, isAnimating } = useDestinationSlideshow();

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ 
      backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')` 
    }}>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative container mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 animate-fadeIn">
          Welcome to TravelVista
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8">
          Visit{' '}
          <span className={`inline-block transition-opacity duration-200 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {currentDestination}
          </span>
        </h1>
        <Button size="lg" className="btn-primary">
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
