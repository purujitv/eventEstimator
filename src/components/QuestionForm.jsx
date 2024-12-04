import React, { useEffect, useState } from 'react';

export function QuestionForm({ questions, answers, setAnswers, onSubmit }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Call the custom onSubmit handler if provided
    if (onSubmit) onSubmit();

    setIsSubmitting(false);
  };

  // Fade-in animation effect
  useEffect(() => {
    const elements = document.querySelectorAll('.question-fade');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 100}ms`;
      el.style.opacity = 1;
    });
  }, [questions]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {questions.map((q, index) => (
        <div
          key={q.id}
          className="question-fade opacity-0 transform transition-all duration-500 ease-in-out"
          style={{
            animation: 'fadeIn 0.5s ease-out forwards',
          }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {q.question}
          </label>

          {q.type === 'select' ? (
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                focus:border-indigo-500 focus:ring-indigo-500
                transition-all duration-300 ease-in-out
                hover:border-indigo-400"
              value={answers[q.id] || ''}
              onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
              required={q.required !== false} // Default to required unless specified otherwise
            >
              <option value="">Select an option</option>
              {q.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={q.type}
              min={q.min || undefined}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                focus:border-indigo-500 focus:ring-indigo-500
                transition-all duration-300 ease-in-out
                hover:border-indigo-400"
              value={answers[q.id] || ''}
              onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
              required={q.required !== false}
            />
          )}
        </div>
      ))}

      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex justify-center py-3 px-4 border border-transparent 
            rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 
            transition-all duration-300 ease-in-out
            ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700 hover:shadow-lg transform hover:-translate-y-1'}
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
