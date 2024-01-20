import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
 return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
 const [users, setUsers] = useState([]);

 const register = (name, email, password) => {
    setUsers((prevUsers) => [...prevUsers, { name, email, password }]);
 };

 const login = (email, password) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    return user;
 };

 const value = {
    users,
    register,
    login,
 };

 return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};