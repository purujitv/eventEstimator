import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { eventQuestions } from "../data/questions";
import { QuestionForm } from "../components/QuestionForm";
import { PricingDisplay } from "../components/PricingDisplay";
import { events } from "../data/events"; // Import your events array

export function EventDetails() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  const questions = eventId ? eventQuestions[eventId] : [];
  const event = events.find((e) => e.id === eventId);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    setIsVisible(false);
    setTimeout(() => {
      console.log("Form submitted:", answers);
      setIsModalOpen(true); // Open the modal on submit
    }, 600);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${event.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.8,
      }}
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-600 ease-in-out ${
          isVisible ? "fade-enter" : "opacity-0 translate-y-8"
        }`}
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-white hover:text-white mb-8 transition-colors duration-300 "
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Events
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 ease-in-out hover:shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {event.title}
              </h2>
              <QuestionForm
                questions={questions}
                answers={answers}
                setAnswers={setAnswers}
                onSubmit={handleSubmit}
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <PricingDisplay eventId={eventId} answers={answers} />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-6">
          <div className="bg-white rounded-lg p-6 w-full max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="text-gray-700 mb-6">
              Thank you for your submission! We will contact you soon.
            </p>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
