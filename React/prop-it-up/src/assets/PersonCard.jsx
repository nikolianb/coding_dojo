import React, { useState } from 'react';

const PersonCard = ({ firstName, lastName, age, hairColor }) => {
    const [currentAge, setCurrentAge] = useState(age);

    const handleBirthdayClick = () => {
      setCurrentAge(currentAge + 1);
    };
    
  return (
    <div>
      <h2> {lastName}, {firstName}</h2>
      <p>Age: {currentAge}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={handleBirthdayClick}>Birthday Button</button>
    </div>
  );
};

export default PersonCard;
