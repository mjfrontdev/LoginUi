import { useState } from 'react'
import { Eye, EyeSlash } from 'iconsax-reactjs'
import { useLanguage } from '../contexts/LanguageContext'
import LeftPanel from './LeftPanel'
import LanguageSwitcher from './LanguageSwitcher'

interface LoginPageProps {
  onSignUpClick?: () => void
}

const LoginPage = ({ onSignUpClick }: LoginPageProps) => {
  const { t, language } = useLanguage()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const isRTL = language === 'fa'

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4 md:p-8 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        <LeftPanel
          selectedWorks={t('login.selectedWorks')}
          signUpButton={t('login.signUpButton')}
          joinUs={t('login.joinUs')}
          onSignUpClick={onSignUpClick}
        />

        {/* Right Panel - Login Form */}
        <div className="lg:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-between min-h-[600px]">
          {/* Header */}
          <div>
            <div className="flex justify-between items-center mb-8 md:mb-12">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">UISOCIAL</h1>
              <LanguageSwitcher />
            </div>

            {/* Welcome Text */}
            <div className="mb-8 md:mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {t('login.title')}
              </h2>
              <p className="text-gray-600 text-base md:text-lg">{t('login.welcome')}</p>
            </div>

            {/* Login Form */}
            <form className="space-y-5 md:space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('login.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder={isRTL ? 'ایمیل خود را وارد کنید' : 'Enter your email'}
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('login.password')}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${isRTL ? 'pl-12' : 'pr-12'}`}
                    placeholder={isRTL ? 'رمز عبور خود را وارد کنید' : 'Enter your password'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute ${isRTL ? 'left-3' : 'right-3'} top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors`}
                  >
                    {showPassword ? (
                      <EyeSlash size="20" color="#6B7280" />
                    ) : (
                      <Eye size="20" color="#6B7280" />
                    )}
                  </button>
                </div>
                <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'} mt-2`}>
                  <a href="#" className="text-sm text-primary hover:text-primary-dark transition-colors">
                    {t('login.forgotPassword')}
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="relative my-6 md:my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">{t('login.or')}</span>
                </div>
              </div>

              {/* Google Login */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-red-500 rounded flex items-center justify-center text-white text-xs font-bold">
                  G
                </div>
                <span className="text-gray-700 font-medium">{t('login.loginWithGoogle')}</span>
              </button>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-base md:text-lg"
              >
                {t('login.login')}
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="mt-8 md:mt-12">
            <p className="text-center text-gray-600 text-sm md:text-base mb-4">
              {t('login.noAccount')}{' '}
              <button 
                onClick={onSignUpClick}
                className="text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                {t('login.signUp')}
              </button>
            </p>
            <div className="flex justify-center gap-4 md:gap-6">
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-pink-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

