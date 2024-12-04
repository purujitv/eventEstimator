import React from 'react';
import { themePricing, menuPricing, drinksPricing, guestPricing } from '../data/pricing';

export function PricingDisplay({ eventId, answers }) {
  const themePrice = answers.theme ? themePricing[eventId]?.[answers.theme] || 0 : 0;
  const menuPrice = answers.menu ? menuPricing[answers.menu] || 0 : 0;
  const drinksPrice = answers.drinks ? drinksPricing[answers.drinks] || 0 : 0;
  
  let guestPrice = 0;
  let discountValue = 0;

  if (answers.guests) {
    const guests = parseInt(answers.guests);
    const tier = guestPricing.tiers.find(t => guests >= t.min && guests <= t.max);
    const guestTotal = guests * guestPricing.baseRate;
    discountValue = guestTotal * (tier?.discount || 0);
    guestPrice = guestTotal - discountValue;
  }

  const total = themePrice + guestPrice + menuPrice + drinksPrice;

  return (
    <div className="bg-white p-6 rounded-lg space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing Details</h3>
      
      <div className="space-y-3">
        {themePrice > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Theme ({answers.theme})</span>
            <span className="font-medium">${themePrice.toLocaleString()}</span>
          </div>
        )}
        
        {guestPrice > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Guests ({answers.guests} people)</span>
            <span className="font-medium">${guestPrice.toLocaleString()}</span>
          </div>
        )}

        {discountValue > 0 && (
          <div className="flex justify-between text-sm text-green-600">
            <span className="text-gray-600">Guest Discount</span>
            <span>-${discountValue.toLocaleString()}</span>
          </div>
        )}
        
        {menuPrice > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Menu ({answers.menu})</span>
            <span className="font-medium">${menuPrice.toLocaleString()}</span>
          </div>
        )}
        
        {drinksPrice > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Drinks ({answers.drinks})</span>
            <span className="font-medium">${drinksPrice.toLocaleString()}</span>
          </div>
        )}
        
        <div className="pt-4 border-t">
          <div className="flex justify-between text-base font-semibold">
            <span className="text-gray-900">Total Estimated Price</span>
            <span className="text-indigo-600">${total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
