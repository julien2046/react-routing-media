import React from 'react';
import UsersCard from './UsersCard';

import './UsersList.css';

const listOfUsersPerRow = (users, row, itemsPerRow, match) => { // La liste d'utilisateurs par rangée

  return (
    users
      .slice((row - 1) * itemsPerRow, row * itemsPerRow) // (0 * 2 / 1 * 2 / 2 * 2)  (1 * 2 / 2 * 2 / 2 * 3)
      .map(user => <UsersCard user={user} key={user.id} match={match} />)
  );
}


const listOfRows = (users, itemsPerRow, match) => { // La liste des rangées
  const numberOfUsers = users.length;
  const rows = Math.ceil(numberOfUsers / itemsPerRow);

  return Array(rows)
    .fill()
    .map((val, rowIndex) => (
      <div className="columns" key={rowIndex}>
        {listOfUsersPerRow(users, rowIndex + 1, itemsPerRow, match)}
      </div>
    ));
};

const UsersList = ({ users, itemsPerRow = 2, match }) => ( // La liste d'utilisateurs
  <div className="cards">
    <h3 className="is-size-3 has-text-centered">Users</h3>
    {listOfRows(users, itemsPerRow, match)}
  </div>
);
export default UsersList;
