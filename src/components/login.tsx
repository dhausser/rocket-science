import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom';

 const Login: React.FC<RouteComponentProps> = () => {
  return (
    <Link to="/form" className="button">Login</Link>
  );
}

export default Login;
