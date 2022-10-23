import { FriendListItem } from "./FriendListItem/FriendListItem"
import styled from 'styled-components';
import PropTypes from 'prop-types';

const List = styled.ul`
  list-style: none;
  text-decoration: none;

  padding: 0;
  margin: 0;
`

export const FriendList = ({friends}) => {
   
    return <List className="friend-list">{friends.map(({avatar, name, isOnline, id}) => {
        return <FriendListItem key = {id} avatar = {avatar} name = {name} isOnline = {isOnline} />
    })}</List>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
   }).isRequired
    ).isRequired,
}