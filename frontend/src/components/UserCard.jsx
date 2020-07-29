import React from 'react';

const User = ({ firstName, lastName, profilePicture, onClick }) => (
  <div onClick={onClick} className='user'>
    <img src={profilePicture} alt='user' />
    <p>
      {firstName} {lastName}
    </p>
  </div>
);

export default User;
