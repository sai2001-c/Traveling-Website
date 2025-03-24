
import React from 'react';
import PackageCard from './PackageCard';

const packages = [
  {
    id: 1,
    title: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80',
    description: 'Explore the City of Light with its iconic Eiffel Tower, world-class museums, and charming cafés.',
    price: 1299,
    rating: 4.5
  },
  {
    id: 2,
    title: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    description: 'Experience the perfect blend of tradition and modernity in Japan\'s vibrant capital.',
    price: 1499,
    rating: 5
  },
  {
    id: 3,
    title: 'Rome, Italy',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1096&q=80',
    description: 'Discover the eternal city\'s ancient ruins, art masterpieces, and delicious cuisine.',
    price: 1199,
    rating: 4
  },
  {
    id: 4,
    title: 'New York City, USA',
    image: 'https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    description: 'Experience the energy of the Big Apple with its iconic skyline and diverse culture.',
    price: 1399,
    rating: 4.5
  },
  {
    id: 5,
    title: 'Sydney, Australia',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Visit the stunning harbor city with its iconic Opera House and beautiful beaches.',
    price: 1699,
    rating: 4
  },
  {
    id: 6,
    title: 'Venice, Italy',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1083&q=80',
    description: 'Explore the romantic canals and historic architecture of this unique floating city.',
    price: 1299,
    rating: 4.5
  },
  {
    id: 7,
    title: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Experience paradise with pristine beaches, ancient temples, and lush landscapes.',
    price: 1199,
    rating: 4
  },
  {
    id: 8,
    title: 'Tuscany, Italy',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1086&q=80',
    description: 'Discover rolling hills, vineyards, and charming medieval towns in this Italian paradise.',
    price: 1499,
    rating: 5
  },
  {
    id: 9,
    title: 'London, UK',
    image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Experience the rich history and modern culture of this iconic global city.',
    price: 1599,
    rating: 4.5
  }
];

const PackageGallery = () => {
  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Popular Packages</h2>
          <p className="section-subtitle">
            Discover our selection of carefully curated travel packages
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map(pkg => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageGallery;
