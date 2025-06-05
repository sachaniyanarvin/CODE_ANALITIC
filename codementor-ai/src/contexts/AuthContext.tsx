import React, { createContext, useState, useEffect, useContext } from 'react';
import type { ReactNode } from 'react';
import API from '../services/api';

interface User {
  id: string;
  email: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
  isLoading: true
});

interface Props {
  children: ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // On mount, check localStorage for existing token
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // try to fetch user profile
      API.get('/user/me')
        .then((res) => {
          setUser(res.data.user);
          setToken(storedToken);
        })
        .catch(() => {
          localStorage.removeItem('token');
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const res = await API.post('/auth/login', { email, password });
    const { token: jwtToken, user: userData } = res.data;
    localStorage.setItem('token', jwtToken);
    setToken(jwtToken);
    setUser(userData);
  };

  const signup = async (email: string, password: string) => {
    // Signup ke baad token ya user set na karein
    await API.post('/auth/signup', { email, password });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
