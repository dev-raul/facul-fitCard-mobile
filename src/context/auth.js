import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '~/services/api';

const INITIAL_CONTEXT = {
  signed: false,
  loading: true,
  user: {},
  SignIn: () => {},
  SignOut: () => {},
};
const AuthContext = createContext(INITIAL_CONTEXT);
export function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('@FC_Auth:user');
      const storageToken = await AsyncStorage.getItem('@FC_Auth:token');

      if (storageToken && storageUser) {
        api.defaults.headers.Authorization = `Bearer ${storageToken}`;
        setUser(JSON.parse(storageUser));
      }
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
    loadStorage();
  }, []);

  async function SignIn(data, provider) {
    const response = await api.post('/session', data, {headers: {provider}});

    setUser(response.data.user);
    await AsyncStorage.setItem(
      '@FC_Auth:user',
      JSON.stringify(response.data.user),
    );
    await AsyncStorage.setItem('@FC_Auth:token', response.data.token);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
  }
  function SignOut() {
    AsyncStorage.clear().then(() => setUser(null));
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, loading, user, SignIn, SignOut}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
