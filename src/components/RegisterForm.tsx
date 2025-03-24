
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Mail, Lock, User, Phone, Calendar } from "lucide-react";

const RegisterForm = () => {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    dateOfBirth: "",
    email: "",
    password: "",
    gender: "male",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    contact: "",
    dateOfBirth: "",
    email: "",
    password: "",
    gender: "",
  });

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone: string) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = {
      fullName: "",
      contact: "",
      dateOfBirth: "",
      email: "",
      password: "",
      gender: "",
    };

    // Validate full name
    if (!formData.fullName) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    // Validate contact
    if (!formData.contact) {
      newErrors.contact = "Contact number is required";
      isValid = false;
    } else if (!validatePhone(formData.contact)) {
      newErrors.contact = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    // Validate date of birth
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
      isValid = false;
    } else {
      const dob = new Date(formData.dateOfBirth);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      if (age < 18) {
        newErrors.dateOfBirth = "You must be at least 18 years old";
        isValid = false;
      }
    }

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    // Validate gender
    if (!formData.gender) {
      newErrors.gender = "Please select your gender";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      register(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <div className="relative">
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            className={`form-control pl-10 ${errors.fullName ? "border-red-500" : ""}`}
            placeholder="Enter your full name"
          />
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>
        {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
      </div>

      <div>
        <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
          Contact
        </label>
        <div className="relative">
          <input
            id="contact"
            name="contact"
            type="tel"
            value={formData.contact}
            onChange={handleChange}
            className={`form-control pl-10 ${errors.contact ? "border-red-500" : ""}`}
            placeholder="Enter your phone number"
          />
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>
        {errors.contact && <p className="mt-1 text-sm text-red-500">{errors.contact}</p>}
      </div>

      <div>
        <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
          Date of Birth
        </label>
        <div className="relative">
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className={`form-control pl-10 ${errors.dateOfBirth ? "border-red-500" : ""}`}
          />
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>
        {errors.dateOfBirth && <p className="mt-1 text-sm text-red-500">{errors.dateOfBirth}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <div className="relative">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-control pl-10 ${errors.email ? "border-red-500" : ""}`}
            placeholder="Enter your email"
          />
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
            className={`form-control pl-10 ${errors.password ? "border-red-500" : ""}`}
            placeholder="Create a password"
          />
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>
        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
        {!errors.password && formData.password && (
          <p className="mt-1 text-xs text-gray-500">Password must be at least 8 characters</p>
        )}
      </div>

      <div>
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className={`form-control ${errors.gender ? "border-red-500" : ""}`}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <p className="mt-1 text-sm text-red-500">{errors.gender}</p>}
      </div>

      <Button type="submit" className="btn-primary w-full mt-6">
        Create Account
      </Button>
    </form>
  );
};

export default RegisterForm;
