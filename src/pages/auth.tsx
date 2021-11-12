/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import AuthInput from '../components/auth/AuthInput';
import Image from 'next/image';
import { IconWarning } from '../components/icons';
import useAuth from '../data/hook/useAuth';

type AuthMode = 'login' | 'sign up';

const defaultError = 'Something went wrong!';

const Auth = () => {
  const { login, signup, loginGoogle } = useAuth();

  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoginMode = () => mode === 'login';

  const submit = async () => {
    if (login == null || signup == null) {
      showError(defaultError);

      return;
    }

    try {
      if (isLoginMode()) {
        await login(email, password);
      } else {
        await signup(email, password);
      }
    } catch (e: any) {
      showError(e?.message || defaultError);
    }
  };

  function renderModeLink(mode: AuthMode) {
    const title = isLoginMode() ? "Don't have an account? " : 'Already have an account? ';
    const text = isLoginMode() ? 'Sign Up' : 'Log In';
    const newMode = isLoginMode() ? 'sign up' : 'login';

    return (
      <p
        className='
      flex flex-col justify-center items-center mt-2'>
        {title}
        <a
          className='  
            text-blue-500 hover:text-blue-700
            opacity-75 font-bold hover:opacity-100 
            transition-all duration-500 
            mt-1 cursor-pointer'
          onClick={() => setMode(newMode)}>
          {text}
        </a>
      </p>
    );
  }

  function showError(msg: string, seconds = 5) {
    setError(msg);

    setTimeout(() => setError(null), seconds * 1000);
  }

  const renderErrorAlert = () => (
    <div
      className={`
  flex items-center transition-all
bg-red-400 text-white py-3 px-5
  my-1 border border-red-700 rounded-lg
`}>
      {IconWarning()}
      <span className='ml-2'>{error || defaultError}</span>
    </div>
  );

  return (
    <div
      className='
      flex items-center justify-center h-screen
      '>
      <div
        className={`
        hidden md:block
        md:w-1/2 lg:w-2/3 xl:w-3/4
        `}>
        <img
          src='https://source.unsplash.com/random/1920x1080/?metal'
          alt=''
          className='h-screen w-full object-cover'
        />
      </div>
      <div
        className={`
        p-10 w-full h-screen 
        md:w-1/2 lg:1/3 xl:w-1/4
        flex flex-col justify-center
        bg-gray-100
      `}>
        <h1 className='text-xl font-bold mb-5'>
          {isLoginMode() ? 'Login with Your Account' : 'Sign up on the Platform'}
        </h1>

        {error ? renderErrorAlert() : false}

        <AuthInput
          label={`Email`}
          type='email'
          required
          value={email}
          onChange={(a) => setEmail(a)}
        />

        <AuthInput
          label={'Password'}
          type='password'
          required
          value={password}
          onChange={(p) => setPassword(p)}
        />

        <button
          className={`
          w-full bg-indigo-500 hover:bg-indigo-400
          text-white rounded-lg px-4 py-3 mt-5
        `}
          onClick={submit}>
          {isLoginMode() ? 'Login' : 'Sign Up'}
        </button>

        <hr className=' my-4 border-gray-300 w-full' />

        <button
          className={`
        flex justify-center items-center
        w-full bg-white hover:bg-gray-100
         border-black border-2 border-opacity-20
        rounded-lg text-black px-4 py-3 
      `}
          onClick={loginGoogle}>
          <Image src='/google-logo.svg' alt='Google' width={20} height={20} />
          <span className='mr-2'></span>
          Continue with Google
        </button>

        {isLoginMode() ? renderModeLink('login') : renderModeLink('sign up')}
      </div>
    </div>
  );
};

export default Auth;
