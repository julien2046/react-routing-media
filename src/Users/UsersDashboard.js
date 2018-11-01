import React from 'react';
import { Route } from 'react-router-dom';

import UsersList from './UsersList';
import UsersDetails from './UsersDetails';

const UsersDashboard = ({ users, user, match }) => (
  <div className="columns">
    <div className="column">
      <UsersList users={users} match={match} />
    </div>
    <div className="column">
      <Route
        path={match.url + '/:id'}
        render={props => (
          <UsersDetails
            user={
              users.filter(
                user => user.id === parseInt(props.match.params.id, 10) // Base 10 = décimale
              )[0]
            }
            match={match}
          />
        )}
      />
    </div>
  </div>
);

export default UsersDashboard;
