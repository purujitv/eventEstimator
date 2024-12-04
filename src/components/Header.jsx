import React from "react";
import { PartyPopper } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/" className="flex items-center space-x-4 group">
          <PartyPopper className="h-8 w-8 text-indigo-600 transition-transform group-hover:scale-110" />
          <h1 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
            Event Estimator
          </h1>
        </Link>
      </div>
    </header>
  );
}
