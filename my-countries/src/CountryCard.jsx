import React from 'react';

const CountryCard = ({ name, flag }) => {
  return (
    <div className="card">
      <img
        src={flag}
        alt={`${name} flag`}
        onError={(e) => (e.target.style.display = 'none')}
      />
      <p>{name}</p>
    </div>
  );
};

export default CountryCard;
