export const eventQuestions = {
  birthday: [
    { id: 'age', question: 'Age of the birthday person?', type: 'number', min:"1" },
    { id: 'theme', question: 'Select a theme', type: 'select', options: ['Princess', 'Superhero', 'Vintage', 'Modern', 'Custom'] },
    { id: 'guests', question: 'Number of guests expected?', type: 'number' ,min:"1"},
    { id: 'menu', question: 'Select menu preference', type: 'select', options: ['Vegetarian', 'Non-Vegetarian', 'Mixed'] },
    { id: 'drinks', question: 'Select welcome drinks', type: 'select', options: ['Mocktails', 'Fresh Juices', 'Soft Drinks'] },
  ],
  anniversary: [
    { id: 'years', question: 'Years of togetherness?', type: 'number', min:"1" },
    { id: 'theme', question: 'Select a theme', type: 'select', options: ['Romantic', 'Vintage', 'Modern', 'Custom'] },
    { id: 'guests', question: 'Number of guests expected?', type: 'number', min:"1" },
    { id: 'menu', question: 'Select menu preference', type: 'select', options: ['Vegetarian', 'Non-Vegetarian', 'Mixed'] },
    { id: 'drinks', question: 'Select welcome drinks', type: 'select', options: ['Champagne', 'Mocktails', 'Wine'] },
  ],
  engagement: [
    { id: 'date', question: 'Preferred date?', type: 'date' },
    { id: 'theme', question: 'Select a theme', type: 'select', options: ['Traditional', 'Modern', 'Royal', 'Custom'] },
    { id: 'guests', question: 'Number of guests expected?', type: 'number', min:"1" },
    { id: 'menu', question: 'Select menu preference', type: 'select', options: ['Vegetarian', 'Non-Vegetarian', 'Mixed'] },
    { id: 'drinks', question: 'Select welcome drinks', type: 'select', options: ['Champagne', 'Mocktails', 'Fresh Juices'] },
  ],
  marriage: [
    { id: 'date', question: 'Wedding date?', type: 'date' },
    { id: 'theme', question: 'Select a theme', type: 'select', options: ['Royal', 'Traditional', 'Modern', 'Beach', 'Custom'] },
    { id: 'guests', question: 'Number of guests expected?', type: 'number', min:"1" },
    { id: 'menu', question: 'Select menu preference', type: 'select', options: ['Vegetarian', 'Non-Vegetarian', 'Mixed'] },
    { id: 'drinks', question: 'Select welcome drinks', type: 'select', options: ['Champagne', 'Mocktails', 'Fresh Juices'] },
  ],
};