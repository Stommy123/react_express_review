import React from 'react';

const UserDetailsModal = ({ isOpen, selectedUser, closeModal }) => {
  if (!isOpen) return null;

  const { name, location, dob, phone, picture } = selectedUser;

  const backDropClick = _ => {
    closeModal();
  };

  const wrapperClick = e => {
    e.stopPropagation();
  };

  return (
    <div onClick={backDropClick} className='modal-backdrop'>
      <div onClick={wrapperClick} className='modal-wrapper'>
        <img src={picture.large} alt='user' />
        <p>
          <strong>Name: </strong> {name.first} {name.last}
        </p>
        <p>
          <strong>Location: </strong> {location.city}, {location.state}, {location.country}
        </p>
        <p>
          <strong>Date of Birth: </strong> {new Date(dob.date).toLocaleDateString()}
        </p>
        <p>
          <strong>Contact: </strong> {phone}
        </p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default UserDetailsModal;
