
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
              alt="About TravelBreeze"
              className="rounded-2xl w-full h-auto object-cover shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="section-title mb-6">About TravelBreeze</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2010, TravelBreeze is a premier travel company dedicated to crafting 
              unforgettable journeys for adventure seekers, culture enthusiasts, and relaxation 
              hunters alike.
            </p>
            
            <p className="text-gray-600 mb-6">
              Our mission is to make exceptional travel experiences accessible to everyone. 
              We believe that exploring the world should be both enriching and comfortable, 
              which is why we curate each destination with meticulous attention to detail.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Established</h3>
                <p>2010</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Destinations</h3>
                <p>50+ Countries</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Happy Travelers</h3>
                <p>100,000+</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Local Guides</h3>
                <p>200+ Experts</p>
              </div>
            </div>
            
            <p className="text-gray-600">
              Whether you're planning a family vacation, a solo adventure, or a romantic getaway, 
              our team of experienced travel consultants is ready to design the perfect itinerary 
              tailored to your preferences and needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
