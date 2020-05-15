import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  text: string;
  path: string;
}

function Button({ text, path }: Props) {
  return (
    <Link className="button" to={path}>
      {text}
    </Link>
  );
}

export default Button;
