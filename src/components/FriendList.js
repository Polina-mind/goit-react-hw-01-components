import React from 'react';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <section className="statistics">
      <ul className="friend-list">
        {friends.map(({ id, isOnline, avatar, name }) => (
          <li className="item" key={id}>
            {isOnline ? (
              <span className="status-green">{isOnline}</span>
            ) : (
              <span className="status-red">{isOnline}</span>
            )}

            <img className="avatar" src={avatar} alt="" width="48" />
            <p className="name">{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
