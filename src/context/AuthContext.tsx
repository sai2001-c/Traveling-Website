
import React, { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (email: string, password: string) => void;
  register: (data: RegisterData) => void;
  logout: () => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (isOpen: boolean) => void;
  authModalView: "login" | "register";
  setAuthModalView: (view: "login" | "register") => void;
}

interface RegisterData {
  fullName: string;
  contact: string;
  dateOfBirth: string;
  email: string;
  password: string;
  gender: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalView, setAuthModalView] = useState<"login" | "register">("login");

  const login = (email: string, password: string) => {
    // For demo purposes, simple login
    if (email && password) {
      setIsLoggedIn(true);
      setIsAuthModalOpen(false);
      toast.success("Login successful!");
    } else {
      toast.error("Please enter both email and password");
    }
  };

  const register = (data: RegisterData) => {
    // For demo purposes, simple registration
    if (
      data.fullName && 
      data.contact && 
      data.dateOfBirth && 
      data.email && 
      data.password && 
      data.gender
    ) {
      setIsLoggedIn(true);
      setIsAuthModalOpen(false);
      toast.success("Registration successful!");
    } else {
      toast.error("Please fill in all fields");
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    toast.success("Logout successful!");
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isLoggedIn, 
        login, 
        register, 
        logout, 
        isAuthModalOpen, 
        setIsAuthModalOpen,
        authModalView,
        setAuthModalView 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
