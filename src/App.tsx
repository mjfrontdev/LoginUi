import { useState } from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'

function App() {
  const [currentPage, setCurrentPage] = useState<'login' | 'signup'>('login')

  return (
    <LanguageProvider>
      {currentPage === 'login' ? (
        <LoginPage onSignUpClick={() => setCurrentPage('signup')} />
      ) : (
        <SignUpPage onLoginClick={() => setCurrentPage('login')} />
      )}
    </LanguageProvider>
  )
}

export default App

