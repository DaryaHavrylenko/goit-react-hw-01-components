import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getRandomHexColor } from "utils/getRandomColor";


const Image = styled.img`
width: 80px;
border-radius: 50%;
 max-width: 100%;
  height: auto;

`
const Label = styled.span`

color: ${(props) => props.color};
cursor: pointer;
&:hover {
    color: red;
}
`
const Profile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid black;
margin: 0 auto;
width: 300px;
padding: 15px;
`
const Info = styled.p`
margin: 0;
padding: 0;
`

const List = styled.ul`
  list-style: none;
  text-decoration: none;

  padding: 0;
  margin: 0;
`

export const UserCards = ({ username, tag, avatar, location, stats}) => {
    return ( <Profile className="profile">
  <div className="description">
    <Image
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
            <Info className="name">{ username }</Info>
            <Info className="tag">@{ tag}</Info>
            <Info className="location">{ location}</Info>
  </div>

  <List className="stats">
    <li>
      <Label color={getRandomHexColor()} className="label">Followers</Label>
                <span className="quantity">{ stats.followers}</span>
    </li>
    <li>
      <Label color={getRandomHexColor()} className="label">Views</Label>
      <span className="quantity">{ stats.views}</span>
    </li>
    <li>
      <Label color={getRandomHexColor()} className="label">Likes</Label>
      <span className="quantity">{ stats.likes}</span>
    </li>
  </List>
</Profile>)
}

UserCards.propTypes = {
   user: PropTypes.exact({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
       stats: PropTypes.shape({ followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
           likes: PropTypes.number.isRequired,}
          
       ).isRequired
         })
   }