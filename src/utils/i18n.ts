export type Language = 'en' | 'fa'

export const translations = {
  en: {
    login: {
      title: 'Hi Designer',
      welcome: 'Welcome to UISOCIAL',
      email: 'Email',
      password: 'Password',
      forgotPassword: 'Forgot password?',
      login: 'Login',
      loginWithGoogle: 'Login with Google',
      or: 'or',
      noAccount: "Don't have an account?",
      signUp: 'Sign up',
      selectedWorks: 'Selected Works',
      signUpButton: 'Sign Up',
      joinUs: 'Join Us',
    },
    signup: {
      title: 'Join Us',
      welcome: 'Create your account',
      name: 'Full Name',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      signUp: 'Sign Up',
      signUpWithGoogle: 'Sign up with Google',
      or: 'or',
      haveAccount: 'Already have an account?',
      login: 'Login',
    },
  },
  fa: {
    login: {
      title: 'سلام طراح',
      welcome: 'به UISOCIAL خوش آمدید',
      email: 'ایمیل',
      password: 'رمز عبور',
      forgotPassword: 'رمز عبور را فراموش کرده‌اید؟',
      login: 'ورود',
      loginWithGoogle: 'ورود با گوگل',
      or: 'یا',
      noAccount: 'حساب کاربری ندارید؟',
      signUp: 'ثبت نام',
      selectedWorks: 'آثار منتخب',
      signUpButton: 'ثبت نام',
      joinUs: 'به ما بپیوندید',
    },
    signup: {
      title: 'به ما بپیوندید',
      welcome: 'حساب کاربری خود را ایجاد کنید',
      name: 'نام کامل',
      email: 'ایمیل',
      password: 'رمز عبور',
      confirmPassword: 'تکرار رمز عبور',
      signUp: 'ثبت نام',
      signUpWithGoogle: 'ثبت نام با گوگل',
      or: 'یا',
      haveAccount: 'قبلاً حساب کاربری دارید؟',
      login: 'ورود',
    },
  },
}

export const getTranslation = (lang: Language, key: string): string => {
  const keys = key.split('.')
  let value: any = translations[lang]
  
  for (const k of keys) {
    value = value?.[k]
  }
  
  return value || key
}

