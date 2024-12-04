import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function EventCard({ event }) {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate(`/event/${event.id}`);
    }, 500);
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-lg shadow-lg cursor-pointer
        ${isClicked ? 'fade-exit' : ''}
        transform transition-all duration-400 ease-in-out hover:scale-105`}
      onClick={handleClick}
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={event.image}
          alt={event.title}
          className="h-64 w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent 
        transition-opacity duration-300 ease-in-out group-hover:from-black/80" />
      <div className="absolute bottom-0 p-6 text-white transform transition-all duration-300 ease-in-out">
        <h3 className="text-2xl font-bold mb-2 transform transition-all duration-300 ease-in-out group-hover:translate-y-[-4px]">
          {event.title}
        </h3>
        <p className="text-sm opacity-90 transform transition-all duration-300 ease-in-out group-hover:translate-y-[-4px]">
          {event.description}
        </p>
      </div>
    </div>
  );
}