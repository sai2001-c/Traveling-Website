
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, StarHalf } from 'lucide-react';

interface PackageProps {
  package: {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
    rating: number;
  }
}

const PackageCard = ({ package: pkg }: PackageProps) => {
  // Function to render stars based on rating
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`star-${i}`} className="fill-yellow-400 text-yellow-400" size={16} />
      );
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half-star" className="fill-yellow-400 text-yellow-400" size={16} />
      );
    }
    
    // Add empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="text-yellow-400" size={16} />
      );
    }
    
    return stars;
  };
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{pkg.description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold">${pkg.price}</span>
          <div className="flex space-x-1">
            {renderRating(pkg.rating)}
          </div>
        </div>
        
        <Button className="w-full">Book Now</Button>
      </div>
    </div>
  );
};

export default PackageCard;
