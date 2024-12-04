import React from 'react';
import { EventCard } from '../components/EventCard';
import { events } from '../data/events';

export function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Celebrate Your Special Moments</h2>
        <p className="text-lg text-gray-600">Choose from our carefully curated selection of events</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />     
        ))}
      </div>
    </div>
  );
}