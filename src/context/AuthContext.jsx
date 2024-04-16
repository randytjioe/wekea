import { createContext, useContext, useMemo, useState } from 'react';

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

  const login = (userLogin) => {
    setUser(userLogin);
  };

  const logout = () => {
    setUser(null);
  };
  return useMemo(() => (
    <AuthContext.Provider value={{ user, isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  ), [user, isAuth, login, logout, children]);
}
