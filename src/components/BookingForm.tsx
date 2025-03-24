
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    destination: '',
    persons: '',
    startDate: '',
    endDate: '',
    description: ''
  });
  
  const [errors, setErrors] = useState({
    destination: '',
    persons: '',
    startDate: '',
    endDate: '',
    description: ''
  });
  
  const [charCount, setCharCount] = useState(0);
  
  useEffect(() => {
    // Set minimum date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];
    
    const startDateInput = document.getElementById('startDate') as HTMLInputElement;
    if (startDateInput) {
      startDateInput.min = tomorrowStr;
    }
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    setErrors(prev => ({ ...prev, [name]: '' }));
    
    // Update character count for description
    if (name === 'description') {
      setCharCount(value.length);
    }
    
    // Set minimum end date when start date changes
    if (name === 'startDate' && value) {
      const selectedStart = new Date(value);
      selectedStart.setDate(selectedStart.getDate() + 1);
      const minEndDate = selectedStart.toISOString().split('T')[0];
      
      const endDateInput = document.getElementById('endDate') as HTMLInputElement;
      if (endDateInput) {
        endDateInput.min = minEndDate;
      }
      
      // Clear end date if it's before start date
      if (formData.endDate && new Date(formData.endDate) <= new Date(value)) {
        setFormData(prev => ({ ...prev, endDate: '' }));
      }
    }
  };
  
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      destination: '',
      persons: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    
    // Validate destination
    if (!formData.destination) {
      newErrors.destination = 'Please select a destination';
      isValid = false;
    }
    
    // Validate persons
    if (!formData.persons) {
      newErrors.persons = 'Please enter number of persons';
      isValid = false;
    } else if (Number(formData.persons) < 1) {
      newErrors.persons = 'Number of persons must be at least 1';
      isValid = false;
    }
    
    // Validate start date
    if (!formData.startDate) {
      newErrors.startDate = 'Please select a start date';
      isValid = false;
    }
    
    // Validate end date
    if (!formData.endDate) {
      newErrors.endDate = 'Please select an end date';
      isValid = false;
    }
    
    // Validate description
    if (!formData.description) {
      newErrors.description = 'Please enter a description';
      isValid = false;
    } else if (formData.description.length < 50) {
      newErrors.description = 'Description must be at least 50 characters';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast.success('Booking successful! We will contact you shortly with more details.');
      
      // Reset form
      setFormData({
        destination: '',
        persons: '',
        startDate: '',
        endDate: '',
        description: ''
      });
      setCharCount(0);
    }
  };
  
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-serif font-semibold text-center text-primary mb-6">
        Plan Your Journey
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="destination" className="block text-sm font-medium mb-1">
            Where to
          </label>
          <select
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
            className={`form-control ${errors.destination ? 'border-red-500' : ''}`}
          >
            <option value="">Choose destination...</option>
            <option value="paris">Paris, France</option>
            <option value="tokyo">Tokyo, Japan</option>
            <option value="rome">Rome, Italy</option>
            <option value="nyc">New York City, USA</option>
            <option value="sydney">Sydney, Australia</option>
          </select>
          {errors.destination && (
            <p className="mt-1 text-sm text-red-500">{errors.destination}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="persons" className="block text-sm font-medium mb-1">
            How Many Persons
          </label>
          <Input
            id="persons"
            name="persons"
            type="number"
            min="1"
            value={formData.persons}
            onChange={handleInputChange}
            className={errors.persons ? 'border-red-500' : ''}
          />
          {errors.persons && (
            <p className="mt-1 text-sm text-red-500">{errors.persons}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium mb-1">
            Start Date
          </label>
          <Input
            id="startDate"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleInputChange}
            className={errors.startDate ? 'border-red-500' : ''}
          />
          {errors.startDate && (
            <p className="mt-1 text-sm text-red-500">{errors.startDate}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium mb-1">
            End Date
          </label>
          <Input
            id="endDate"
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleInputChange}
            className={errors.endDate ? 'border-red-500' : ''}
          />
          {errors.endDate && (
            <p className="mt-1 text-sm text-red-500">{errors.endDate}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            minLength={50}
            maxLength={500}
            value={formData.description}
            onChange={handleInputChange}
            className={`form-control ${errors.description ? 'border-red-500' : ''}`}
          ></textarea>
          <div className="flex justify-between text-xs mt-1">
            <span className={charCount < 50 ? 'text-red-500' : 'text-gray-500'}>
              {charCount}/500 characters
            </span>
            {charCount < 50 && (
              <span className="text-red-500">
                {50 - charCount} more characters needed
              </span>
            )}
          </div>
          {errors.description && (
            <p className="mt-1 text-sm text-red-500">{errors.description}</p>
          )}
        </div>
        
        <Button type="submit" className="w-full btn-primary mt-6">
          Book Now
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
