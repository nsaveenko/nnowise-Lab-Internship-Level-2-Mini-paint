import React, { FC, useContext, useEffect, useState } from 'react';
import { auth } from '../api/index';

export interface AuthContextInterface {
  signin?: any;
  signup?: any | null;
  signout?: any;
  currentUser?: any;
}

const AuthContext = React.createContext<AuthContextInterface>({});

export function useAuth(): AuthContextInterface {
  return useContext(AuthContext);
}

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const signin = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const signout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextInterface = {
    signin,
    signup,
    signout,
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      { !loading && children }
    </AuthContext.Provider>
  );
};

export default AuthProvider;