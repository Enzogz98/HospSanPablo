import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Inicializa el estado `userId` con el valor guardado en localStorage, si existe.
  const [userId, setUserId] = useState(() => {
    const savedUserId = localStorage.getItem("userId");
    console.log(savedUserId)
    return savedUserId || null; // Devuelve null si no hay un ID guardado
  });

  const [userIdEdit, setUserIdEdit] = useState(() => {
    const savedUserIdEdit = localStorage.getItem('userIdEdit');
    return savedUserIdEdit || null;  
  });

  useEffect(() => {
    if (!userIdEdit) {
      getUserIdEdit(); // Recuperar el ID si no está presente en el estado
    }
  }, [userIdEdit]);

  // Inicializa `userNombre` con el valor almacenado en localStorage, si existe.
  const [userNombre, setUserNombre] = useState(() => {
    const savedUserNombre = localStorage.getItem("userNombre");
    return savedUserNombre || "";
  });

  // Inicializa `logeado` como true o false dependiendo del valor en localStorage.
  const [logeado, setLogeado] = useState(() => {
    const saved = localStorage.getItem("logeado");
    return saved === "true"; // Se asegura de que se guarde como un booleano
  });

  // Función para actualizar `userNombre` y guardarlo en localStorage.
  const getUser = (value) => {
    setUserNombre(value);
    localStorage.setItem("userNombre", value); // Actualiza localStorage cuando cambia
  };

  // Función para actualizar `userId`, tanto en el estado como en localStorage.
  const getUserId = (value) => {
    if (value) {
      setUserId(value);
      localStorage.setItem("userId", value); // Guarda el ID en localStorage
    } else {
      const savedUserId = localStorage.getItem("userId");
      setUserId(savedUserId); // Actualiza el estado con el valor de localStorage
    }
    return value || localStorage.getItem("userId"); // Devuelve el valor correcto
  };

  const getUserIdEdit = (value) => {
    if (value) {
      setUserIdEdit(value);
      localStorage.setItem('userIdEdit', value);
    } else {
      const savedUserIdEdit = localStorage.getItem('userIdEdit');
      setUserIdEdit(savedUserIdEdit); 
    }
  };

  // Función para actualizar el estado de logueo y guardarlo en localStorage.
  const handleLogear = (status) => {
    setLogeado(status);
    localStorage.setItem("logeado", status); // Guarda el estado de logueo
  };

  // Efecto que se ejecuta al montar el componente para recuperar el usuario guardado en localStorage.
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser); // Si hay un usuario guardado, lo recupera
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        userNombre,
        setUserNombre,
        user,
        getUser,
        logeado,
        handleLogear,
        userId,
        getUserId,
        userIdEdit,
        getUserIdEdit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
