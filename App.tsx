import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { DonationCard } from './components/DonationCard';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Notification } from './components/Notification';

const App: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);

  const triggerNotification = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-800">
      <Header />
      
      <main className="flex-grow">
        <Hero onDonateClick={() => {
          const element = document.getElementById('donate-section');
          element?.scrollIntoView({ behavior: 'smooth' });
        }} />
        
        <Stats />
        
        <div id="donate-section" className="py-16 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400"></div>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-charity-green mb-4">
                Cổng Donate Chính Thức
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Quét mã bên dưới. Tiền sẽ đi thẳng vào ví Hào và nằm im ở đó mãi mãi. 
                <span className="block font-bold text-scam-red mt-2">"Chắc chắn không hoàn trả"</span>
              </p>
            </div>
            
            <div className="flex justify-center">
              <DonationCard onCopy={triggerNotification} />
            </div>
          </div>
        </div>

        <Features />
      </main>

      <Footer />
      
      {showNotification && (
        <Notification message="Đã sao chép STK! Nhanh tay chuyển nhé!" />
      )}
    </div>
  );
};

export default App;