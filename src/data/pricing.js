export const themePricing = {
  birthday: {
    Princess: 1500,
    Superhero: 1200,
    Vintage: 1800,
    Modern: 1600,
    Custom: 2000
  },
  anniversary: {
    Romantic: 2000,
    Vintage: 1800,
    Modern: 1600,
    Custom: 2500
  },
  engagement: {
    Traditional: 2500,
    Modern: 2200,
    Royal: 3000,
    Custom: 3500
  },
  marriage: {
    Royal: 5000,
    Traditional: 4000,
    Modern: 3500,
    Beach: 4500,
    Custom: 6000
  }
};

export const guestPricing = {
  baseRate: 50, // per person
  tiers: [
    { min: 0, max: 50, discount: 0 },
    { min: 51, max: 100, discount: 0.1 },
    { min: 101, max: 200, discount: 0.15 },
    { min: 201, max: Infinity, discount: 0.2 }
  ]
};

export const menuPricing = {
  Vegetarian: 800,
  'Non-Vegetarian': 1200,
  Mixed: 1500
};

export const drinksPricing = {
  Mocktails: 300,
  'Fresh Juices': 200,
  'Soft Drinks': 150,
  Champagne: 800,
  Wine: 600
};

export const calculateTotalPrice = (eventId, answers) => {
  let total = 0;

  // Theme price
  if (answers.theme && themePricing[eventId]?.[answers.theme]) {
    total += themePricing[eventId][answers.theme];
  }

  // Guest price
  if (answers.guests) {
    const guests = parseInt(answers.guests);
    const tier = guestPricing.tiers.find(t => guests >= t.min && guests <= t.max);
    const guestTotal = guests * guestPricing.baseRate;
    total += guestTotal - (guestTotal * (tier?.discount || 0));
  }

  // Menu price
  if (answers.menu && menuPricing[answers.menu]) {
    total += menuPricing[answers.menu];
  }

  // Drinks price
  if (answers.drinks && drinksPricing[answers.drinks]) {
    total += drinksPricing[answers.drinks];
  }

  return total;
};