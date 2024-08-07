import React, { useState, useEffect } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const [userNombre, setUserNombre] = useState(() => {
    const savedUserNombre = localStorage.getItem('userNombre');
    return savedUserNombre || '';
  });

  const [logeado, setLogeado] = useState(() => {
    const saved = localStorage.getItem('logeado');
    return saved === 'true';
  });

  const getUser = (value) => {
    setUserNombre(value);
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

  useEffect(() => {
    localStorage.setItem('userNombre', userNombre);
  }, [userNombre]);

  return (
    <UserContext.Provider value={{ userNombre, setUserNombre, user, getUser, logeado, handleLogear }}>
      {children}
    </UserContext.Provider>
  );
};
