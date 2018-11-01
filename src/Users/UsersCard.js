import React from 'react';
import { Link } from 'react-router-dom';
import './UsersCard.css';

const UsersCard = ({ user, match }) => <Link to={`${match.url}/${user.id}`} className="column card">
  <img src={user.avatar} alt=""/>
  <p className="users-card__name">{user.name}</p>
  <p className="users-card__username">@{user.username}</p>
  <div className="users-card__divider"></div>
  <div className="users-card__stats">
    <div>
      <p>{user.followers}</p>
      <span>Followers</span>
    </div>
    <div>
      <p>{user.following}</p>
      <span>Following</span>
    </div>
    <div>
      <p>{user.repos}</p>
      <span>Repositories</span>
    </div>
  </div>
</Link>;

export default UsersCard;
