import { ArrowLeft2, ArrowRight2 } from 'iconsax-reactjs'
import StarField from './StarField'

interface LeftPanelProps {
  selectedWorks: string
  signUpButton: string
  joinUs: string
  onSignUpClick?: () => void
}

const LeftPanel = ({ selectedWorks, signUpButton, joinUs, onSignUpClick }: LeftPanelProps) => {
  return (
    <div className="relative lg:w-1/2 bg-gradient-to-b from-slate-900 via-indigo-900 to-purple-900 p-6 md:p-8 lg:p-12 flex flex-col justify-between min-h-[400px] lg:min-h-[600px] overflow-hidden">
      {/* Stars Background with Canvas */}
      <StarField />

      {/* Large Crescent Moon/Planet */}
      <div className="absolute top-10 right-8 md:top-16 md:right-12 w-32 h-32 md:w-48 md:h-48 animate-float">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/30 to-orange-300/20 rounded-full blur-xl animate-pulse-slow"></div>
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="url(#moonGradient)" opacity="0.9" />
            <defs>
              <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#DC2626" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M 100 20 A 80 80 0 0 1 100 180 A 80 80 0 0 1 100 20 Z"
              fill="url(#moonGradient)"
              opacity="0.8"
            />
            <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Mountain Landscape */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 md:h-3/5">
        <svg viewBox="0 0 1200 600" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,600 L0,450 L200,380 L400,420 L600,350 L800,400 L1000,320 L1200,380 L1200,600 Z"
            fill="url(#mountainFar)"
            opacity="0.6"
          />
          <path
            d="M0,600 L0,500 L150,420 L300,480 L500,400 L700,450 L900,380 L1100,420 L1200,400 L1200,600 Z"
            fill="url(#mountainMid)"
            opacity="0.7"
          />
          <path
            d="M0,600 L0,550 L100,480 L250,520 L450,450 L650,500 L850,430 L1050,480 L1200,460 L1200,600 Z"
            fill="url(#mountainFront)"
            opacity="0.8"
          />
          <path
            d="M300,600 L300,300 L350,350 L400,280 L450,320 L500,250 L550,300 L600,280 L600,600 Z"
            fill="url(#peak1)"
            opacity="0.9"
          />
          <path
            d="M700,600 L700,350 L750,400 L800,320 L850,380 L900,300 L950,350 L1000,320 L1000,600 Z"
            fill="url(#peak2)"
            opacity="0.85"
          />

          <defs>
            <linearGradient id="mountainFar" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#312E81" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="mountainMid" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3730A3" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#5B21B6" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="mountainFront" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4C1D95" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#6B21A8" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="peak1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#DC2626" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="peak2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#9333EA" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#EA580C" stopOpacity="0.85" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Atmospheric Glow Effects */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
        <div className="flex justify-between items-start mb-8">
          <h2 className="text-white text-lg md:text-xl font-semibold">{selectedWorks}</h2>
          <div className="flex gap-2 md:gap-3">
            <button 
              onClick={onSignUpClick}
              className="px-3 md:px-4 py-2 text-white border border-white/30 rounded-lg text-sm md:text-base hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              {signUpButton}
            </button>
            <button className="px-3 md:px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm md:text-base hover:bg-white/30 hover:scale-105 active:scale-95 transition-all duration-200">
              {joinUs}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 flex justify-between items-end animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
        {/* Profile Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 md:p-4 flex items-center gap-3 md:gap-4 hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
            A
          </div>
          <div>
            <p className="text-white font-semibold text-sm md:text-base">Andrew.ui</p>
            <p className="text-white/70 text-xs md:text-sm">UI & Illustration</p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-2">
          <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 hover:scale-110 active:scale-95 transition-all duration-200">
            <ArrowLeft2 size="20" color="#ffffff" />
          </button>
          <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 hover:scale-110 active:scale-95 transition-all duration-200">
            <ArrowRight2 size="20" color="#ffffff" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default LeftPanel

