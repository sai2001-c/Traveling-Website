
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-sm">
        <div className="text-center">
          <Link to="/" className="inline-block">
            <h2 className="text-3xl font-serif font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              TravelVista
            </h2>
          </Link>
          <h1 className="mt-6 text-2xl font-serif font-bold">Sign in to your account</h1>
          <p className="mt-2 text-sm text-gray-500">
            Continue your journey with us
          </p>
        </div>
        
        <div className="mt-8">
          <LoginForm />
          
          <div className="mt-6 text-center text-sm">
            <p>
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-primary font-medium hover:text-primary/80"
              >
                Sign up
              </Link>
            </p>
          </div>
          
          <div className="mt-6 text-center">
            <Link to="/">
              <Button variant="link" className="text-gray-500 hover:text-gray-700">
                Back to home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
