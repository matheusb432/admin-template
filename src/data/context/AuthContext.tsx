import route from 'next/router';
import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import firebase from '../../firebase/config';
import User from '../../model/user';
import { CookieKeys } from '../../model/cookie-keys.enum';

interface AuthContextProps {
  user?: User;
  loading?: boolean;
  login?: (email: string, password: string) => Promise<void>;
  signup?: (email: string, password: string) => Promise<void>;
  loginGoogle?: () => Promise<void>;
  logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function normalizeUser(firebaseUser: firebase.User): Promise<User> {
  const token = await firebaseUser.getIdToken();

  const { uid, displayName, email, providerData, photoURL } = firebaseUser;

  return {
    uid,
    displayName: displayName!,
    email: email!,
    token,
    provider: providerData[0]?.providerId!,
    urlImage: photoURL!,
  };
}

function manageCookie(logged: boolean) {
  if (logged) {
    Cookies.set(CookieKeys.SiteAuth, logged as any, {
      expires: 7,
    });
  } else {
    Cookies.remove(CookieKeys.SiteAuth);
  }
}

export function AuthProvider(props: any) {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User>();

  async function configSession(firebaseUser: firebase.User | null) {
    if (firebaseUser?.email) {
      const loggedUser = await normalizeUser(firebaseUser);

      setUser(loggedUser);

      setLoading(false);

      manageCookie(true);

      return loggedUser.email;
    } else {
      setUser(undefined);

      setLoading(false);

      manageCookie(false);

      return false;
    }
  }

  async function loginGoogle() {
    try {
      setLoading(true);

      const res = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await configSession(res.user);

      route.push('/');
    } finally {
      setLoading(false);
    }
  }

  async function login(email: string, password: string) {
    try {
      setLoading(true);

      const res = await firebase.auth().signInWithEmailAndPassword(email, password);

      await configSession(res.user);

      route.push('/');
    } finally {
      setLoading(false);
    }
  }

  async function signup(email: string, password: string) {
    try {
      setLoading(true);

      const res = await firebase.auth().createUserWithEmailAndPassword(email, password);

      await configSession(res.user);

      route.push('/');
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      setLoading(true);

      await firebase.auth().signOut();

      await configSession(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!Cookies.get(CookieKeys.SiteAuth)) {
      setLoading(false);

      return;
    }

    const cancel = firebase.auth().onIdTokenChanged(configSession as any);

    return () => cancel();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        loginGoogle,
        logout,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
