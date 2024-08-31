import React from 'react';
import photo from './assets/Amit pic.png'; // Import as default

const links = [
  { name: 'YouTube', url: 'https://www.youtube.com/@thejuniorengineer2308', icon: '🎥' },
  { name: 'LinkedIn', url: 'www.linkedin.com/in/amitkumar-profile', icon: '💼' },
  { name: 'GitHub', url: 'https://github.com/amitkumar2308', icon: '💻' },
  { name: 'Instagram', url: 'https://www.instagram.com/amit.devops?utm_source=qr&igsh=NnJ0dm1oMzJ0ZW5x', icon: '📷' },
  { name: 'Portfolio', url: 'https://docs.google.com/document/d/1zI2M0w2Tu8C0xK1kxQ8MFfQ0xkwn9hk3oOek5fQg_Y0/edit?usp=sharing', icon: '📁' }, // Added Portfolio link
  // Add more links as needed
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black flex flex-col items-center justify-center p-6">
      {/* Profile photo */}
      <header className="text-center mb-8">
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg mx-auto relative">
          <img 
            src={photo} 
            alt="Profile" 
            className="w-full h-full object-cover" // Center photo within circle
          />
          <div className="absolute inset-0 border-4 border-blue-500 rounded-full" />
        </div>
      </header>
      
      <div className="w-full max-w-xs mx-auto sm:max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-2">Amit Kumar</h1>
          <p className="text-gray-400 text-base">Web Developer | AI Enthusiast</p>
        </div>
        
        {links.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-gray-900 shadow-md rounded-lg mb-4 p-4 text-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800 border border-gray-700"
          >
            <div className="text-3xl mb-2 transition-transform duration-300 ease-in-out hover:scale-110 text-blue-400">{link.icon}</div>
            <div className="text-md font-medium text-gray-300">{link.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
