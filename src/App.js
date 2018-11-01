import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Media from 'react-media';

import Nav from './Nav';
import UsersList from './Users/UsersList';
import UsersDetails from './Users/UsersDetails';
import UsersDashboard from './Users/UsersDashboard';

class App extends Component {

  state = {

    users: [
      {
        id: 39191,
        avatar: 'https://avatars0.githubusercontent.com/u/39191?v=4',
        name: 'Paul Irish',
        username: 'paulirish',
        followers: '12k',
        following: '1k',
        repos: '1.5k'
      },
      {
        id: 2281088,
        avatar: 'https://avatars1.githubusercontent.com/u/2281088?v=4',
        name: 'Sarah Drasner',
        username: 'sdras',
        followers: '14k',
        following: '3k',
        repos: '1k'
      },
      {
        id: 499550,
        avatar: 'https://avatars1.githubusercontent.com/u/499550?v=4',
        name: 'Evan You',
        username: 'yyx990803',
        followers: '15k',
        following: '6k',
        repos: '200'
      },
      {
        id: 1021163,
        avatar: 'https://avatars2.githubusercontent.com/u/1021163?v=4',
        name: 'Nicholas Cerminara',
        username: 'whatnickcodes',
        followers: '9k',
        following: '300',
        repos: '100k'
      },
      {
        id: 1500684,
        avatar: 'https://avatars0.githubusercontent.com/u/1500684?v=4',
        name: 'Kent C. Dodds',
        username: 'kentcdodds',
        followers: '17k',
        following: '500k',
        repos: '1k'
      }
    ]

  };

  render() {

    return (
      <div>
        <Nav />
        <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
            <Switch>
              <Route
                exact
                path="/users"
                render={props => (
                  <UsersList users={this.state.users} {...props} />
                )}
              />
              <Route
                  path="/users/:id"
                  render={props => (
                    <UsersDetails
                      user={
                        this.state.users.filter(
                          user =>
                            user.id === parseInt(props.match.params.id, 10)
                        )[0]
                      }
                      {...props}
                    />
                  )}
                />
                <Redirect from="/" to="/users"/>
                <Redirect from="/dashboard" to="/users"/>
              </Switch>
            ) : (
              <Switch>
                <Route
                  path="/dashboard"
                  render={props => (
                    <UsersDashboard users={this.state.users} {...props} />
                  )}
                />
                <Redirect from="/" to="/dashboard"/>
                <Redirect from="/users" to="/dashboard"/>
              </Switch>
            )
          }
        </Media>
      </div>
    );
  }
}

export default App;
