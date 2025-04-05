import React, { useState, useEffect } from 'react';
import { Construction, Code2, Rocket, Sparkles } from 'lucide-react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_800px_at_50%_50%,rgba(16,185,129,0.15),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:44px_44px]" />
          <div className="absolute inset-0">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="absolute animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  backgroundColor: '#34d399',
                  borderRadius: '50%',
                  animation: `pulse ${Math.random() * 4 + 2}s infinite`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={`relative z-10 min-h-screen flex flex-col transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center p-4 sm:p-8 max-w-5xl mx-auto">
            <div className="mb-12 flex justify-center items-center">
              <div className="relative">
                <Construction className="w-20 h-20 sm:w-24 sm:h-24 text-emerald-400 animate-bounce" />
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-emerald-400/30 animate-ping" />
              </div>
            </div>
            
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <h1 className="relative text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-8 tracking-tight">
                <span className="inline-block hover:scale-105 transition-transform duration-300">
                  Senin-Alan-Adın.com
                </span>
              </h1>
            </div>
            
            <div className="relative my-16">
              <div className="absolute -left-8 sm:-left-12 top-1/2 -translate-y-1/2 flex items-center gap-4">
                <Code2 className="w-8 h-8 text-emerald-400 animate-spin-slow" />
                <div className="h-[2px] w-12 bg-gradient-to-r from-emerald-500/50 to-transparent" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-emerald-300 font-medium inline-flex items-center gap-4">
                <Sparkles className="w-6 h-6 text-emerald-400" />
                Çok Yakında Sizlerle
                <Rocket className="w-6 h-6 text-emerald-400" />
              </h2>
              <div className="absolute -right-8 sm:-right-12 top-1/2 -translate-y-1/2 flex items-center gap-4">
                <div className="h-[2px] w-12 bg-gradient-to-l from-emerald-500/50 to-transparent" />
                <Code2 className="w-8 h-8 text-emerald-400 animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer credit */}
        <div className="relative z-20 pb-4 text-center">
          <a 
            href="https://botanozalp.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block text-xs sm:text-sm text-emerald-400/60 hover:text-emerald-400 transition-colors duration-300"
          >
            botanozalp.com tarafından geliştirilmesi devam etmektedir
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;