import React from 'react';

const ErrorBox = ({ errors }) => {
  if (errors.length === 0) return (<div></div>);
  const errorItems = [];
  errors.forEach(error => errorItems.push(
    <li key={error}>{error}.</li>
  ));
  return (<ul className="error-box">{errorItems}</ul>);
};

export default ErrorBox;
