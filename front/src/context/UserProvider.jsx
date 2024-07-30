import React, { useState, useEffect } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [logeado, setLogeado] = useState(() => {
    const saved = localStorage.getItem('logeado');
    return saved === 'true';
  });

  const getUser = (value) => {
    setUser(value);
  };

  const handleLogear = (status) => {
    setLogeado(status);
    localStorage.setItem('logeado', status);
  };

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, getUser, logeado, handleLogear }}>
      {children}
    </UserContext.Provider>
  );
};
