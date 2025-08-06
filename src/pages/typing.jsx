import React, { useState } from 'react';
import TurnstileGate from '../components/TurnstileGate';
import Navbar from '../components/Navbar';

export default function TypingTest() {
  const [verified, setVerified] = useState(false);
  const backgroundUrl = '/background.jpg';

  return (
    <div
      className="h-screen bg-black bg-cover bg-center font-sans text-white transition-all duration-100 ease-out flex flex-col"
      style={{
        backgroundColor: '#000',
        backgroundImage: `url(${backgroundUrl})`,
        backgroundPosition: '50% 50%',
      }}
    >
      <Navbar />

      <div className="flex-grow flex items-center justify-center">
        {!verified ? (
          <TurnstileGate onVerifySuccess={() => setVerified(true)} />
        ) : (
          <div className="bg-glass-black border border-glass backdrop-blur-sm rounded-2xl p-8 max-w-xl w-full shadow-glass text-center">
            <h2 className="text-3xl font-bold mb-4">Typing Test</h2>
            <p className="text-lg text-gray-300">
              blah blah ill do this later
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
