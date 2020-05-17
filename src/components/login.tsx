import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom';

 const Login: React.FC<RouteComponentProps> = () => {
  return (
    <div className="wrapper">
      <Link to="/form" className="button">Login</Link>
    </div>
  );
}

export default Login;
