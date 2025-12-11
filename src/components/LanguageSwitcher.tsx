import { useState } from 'react'
import { Global } from 'iconsax-reactjs'
import { useLanguage } from '../contexts/LanguageContext'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fa' : 'en')
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm font-medium text-gray-700">{language.toUpperCase()}</span>
        <Global size="16" color="#4B5563" />
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-[100px]">
            <button
              onClick={toggleLanguage}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              {language === 'en' ? 'فارسی' : 'English'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default LanguageSwitcher

