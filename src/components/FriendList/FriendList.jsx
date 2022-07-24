import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriedListItem';
import styles from 'components/FriendListItem/FriedListItem';

const FriendList = ({ friends }) => (
  <ul className={styles['friend-list']}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
);

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};

export default FriendList;
