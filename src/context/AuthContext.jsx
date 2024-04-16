import { getItem, setItem } from '@utils/helpers/localStorage';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';

const initialState = {
  user: null,
  isAuth: false,
  login: () => {},
  logout: () => {}
};

const AuthContext = createContext(initialState);

export const useGlobalAuthProvider = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const isAuth = !!user;

  useEffect(
    () => {
      const getUser = async () => {
        const token = await getItem('authUser');
        return token;
      };
      getUser().then((auth) => {
        setUser(auth);
      });
    }, []
  );

  const login = (userLogin) => {
    const { email, password } = userLogin;
    if (email === 'admin' && password === 'admin') {
      const token = {
        email,
        username: 'Admin 1',
        userId: '123456789'
      };
      setItem('authUser', token);
      setUser(token);
    } else {
      Alert.alert('Akun tidak dikenal');
    }
  };

  const logout = () => {
    setItem('authUser', null);
    setUser(null);
  };
  return useMemo(() => (
    <AuthContext.Provider value={{ user, isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  ), [user, isAuth, login, logout, children]);
}
