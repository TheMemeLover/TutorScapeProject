import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [information, setInformation] = useState({
    name: '',
    learn: '',
    teach: '',
    age: '',
    gender: '',
    grade: '',
    bio: '',
    public: false
  });

  return (
    <UserContext.Provider value={{ information, setInformation }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;