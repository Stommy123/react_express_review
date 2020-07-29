import React, { useState, useEffect } from 'react';
import UserCard from './components/UserCard';
import UserDetailsModal from './components/UserDetailsModal';

const Users = _ => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchUsers = async _ => {
    const response = await fetch('https://randomuser.me/api/?results=15');
    const userData = await response.json();
    setUsers(userData.results);
  };

  const handleUserClick = user => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  useEffect(_ => void fetchUsers(), []);

  return (
    <div id='user-list' className='container'>
      {users.map(user => (
        <UserCard
          firstName={user.name.first}
          lastName={user.name.last}
          profilePicture={user.picture.large}
          onClick={_ => handleUserClick(user)}
        />
      ))}
      <UserDetailsModal
        isOpen={modalOpen}
        selectedUser={selectedUser}
        closeModal={_ => setModalOpen(false)}
      />
    </div>
  );
};

export default Users;
