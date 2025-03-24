
import React, { useState } from "react";
import { X } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthModal = () => {
  const { 
    isAuthModalOpen, 
    setIsAuthModalOpen, 
    authModalView, 
    setAuthModalView 
  } = useAuth();

  return (
    <Dialog open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen}>
      <DialogContent className="sm:max-w-[450px] p-0">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-xl font-serif">
            {authModalView === "login" ? "Welcome Back" : "Create Account"}
          </DialogTitle>
          <DialogDescription>
            {authModalView === "login" 
              ? "Sign in to your account to continue your journey" 
              : "Join us to start your travel adventures"
            }
          </DialogDescription>
          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={18} />
          </button>
        </DialogHeader>
        
        <div className="p-6 pt-2">
          {authModalView === "login" ? <LoginForm /> : <RegisterForm />}
          
          <div className="mt-6 text-center text-sm">
            {authModalView === "login" ? (
              <p>
                Don't have an account?{" "}
                <Button
                  variant="link"
                  className="p-0 text-primary font-medium"
                  onClick={() => setAuthModalView("register")}
                >
                  Sign up
                </Button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <Button
                  variant="link"
                  className="p-0 text-primary font-medium"
                  onClick={() => setAuthModalView("login")}
                >
                  Sign in
                </Button>
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
