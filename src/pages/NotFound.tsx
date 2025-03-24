
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-serif font-semibold mt-4 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="btn-primary">Return Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
