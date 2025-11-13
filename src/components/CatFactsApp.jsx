import React, { useEffect, useState } from "react";

const CatFactsApp = () => {
  const [facts, setFacts] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCatFacts();
  }, []);

  const fetchCatFacts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFacts(data.fact);
    } catch (error) {
      console.error("Error fetching cat facts:", error);
      setFacts("Oops! Something went wrong 😿");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-400 to-orange-300">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-center">
        <h1 className="text-3xl font-bold text-purple-700 mb-4 font-mono">
          🐱 Cat Facts
        </h1>
        <hr className="border-purple-400 mb-6" />

        <p className="text-gray-700 text-lg mb-4">Did you know?</p>

        {loading ? (
          <p className="text-gray-500 animate-pulse">Fetching a new fact...</p>
        ) : (
          <p className="bg-purple-100 text-purple-800 rounded-xl p-4 shadow-inner transition-all duration-300">
            {facts}
          </p>
        )}

        <button
          onClick={fetchCatFacts}
          className="mt-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:scale-105 transform transition duration-300"
        >
          Get New Fact
        </button>
      </div>
    </div>
  );
};

export default CatFactsApp;
