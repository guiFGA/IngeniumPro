import React from 'react'
import {Navigate} from 'react-router-dom'




const isAuthenticated = () => {
    //verifica se há um token no localStorage
    const token = sessionStorage.getItem('authToken');
    return token !== null; // Retorna true se existir o token
    
  };

    //se houver token renderiza o elemento filho e se nao tiver, redireciona pro login
  const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
  };
  
  export default PrivateRoute;