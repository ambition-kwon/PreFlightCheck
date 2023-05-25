import React from 'react';
import {createContext, useState} from 'react';

const LoginContext = createContext();

export function LoginContextProvider({children}) {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const onCreate = (email, password) => {
    const newData = {
      email: email,
      password: password,
    };
    setLoginData(newData);
  };
  const onRemove = () => {
    const newData = {
      email: '',
      password: '',
    };
    setLoginData(newData);
  };

  return (
    <LoginContext.Provider value={{loginData, onCreate, onRemove}}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContext;
