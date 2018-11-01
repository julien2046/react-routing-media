import React from 'react';
import UsersCard from './UsersCard';

const UsersDetails = ({ user, match }) => (
  <div>
    <h3 className="is-size-3 has-text-centered">Details</h3>
    <UsersCard user={user} match={match} />
  </div>
);



export default UsersDetails;
