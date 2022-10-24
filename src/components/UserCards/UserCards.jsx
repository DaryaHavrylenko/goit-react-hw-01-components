import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getRandomHexColor } from "utils/getRandomColor";

const Profile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
margin-top: ${p => p.theme.space[3]}px;
width: 300px;
padding-top: ${p => p.theme.space[4]}px;
padding-bottom: ${p => p.theme.space[4]}px;
padding-right: ${p => p.theme.space[4]}px;
padding-left: ${p => p.theme.space[4]}px;
font-family: ${p => p.theme.fonts.heading};
border: ${p => p.theme.borders.normal};
border-color: ${p => p.theme.colors.border};
border-radius: ${p=> p.theme.radii.md};
&:hover {box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);}
`
const Description = styled.div`
display: flex;
align-items: center;
flex-direction: column;

`

const Image = styled.img`
display:flex;
width: 80px;
border-radius: ${p => p.theme.radii.round};
 max-width: 100%;
  height: auto;

`
const Info = styled.p`
display: flex;
justify-content: center;
margin-bottom: ${p => p.theme.space[2]}px;
padding: ${p => p.theme.space[0]}px;
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.normal};
`
const InfoName = styled.p`
font-weight: ${p => p.theme.fontWeights.bold};
margin: 0;
`

const List = styled.ul`
display: flex;
list-style: none;
text-decoration: none;
padding: ${p => p.theme.space[0]}px;
margin-top: ${p => p.theme.space[3]}px;
font-size: ${p => p.theme.fontSizes.m}
`
const ListItems = styled.li`
display: flex;
flex-direction: column;
margin-right: ${p => p.theme.space[3]}px;
font-family: ${p => p.theme.fonts.heading};
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.normal};
&:hover {
box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
}
`
const Label = styled.span`
display: flex;
justify-content: center;
padding-right: ${p => p.theme.space[3]}px;
padding-left: ${p => p.theme.space[3]}px;
padding-top: ${p => p.theme.space[4]}px;
padding-bottom: ${p => p.theme.space[4]}px;
color: ${(p) => p.color};
cursor: pointer;

&:hover {
    color: red;
}
`
const Items = styled.span`
display: flex;
justify-content: center;
padding-bottom: ${p => p.theme.space[4]}px;
font-weight: ${p => p.theme.fontWeights.bold};
`
export const UserCards = ({ username, tag, avatar, location, stats}) => {
    return ( <Profile className="profile">
  <Description className="description">
    <Image
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
            <InfoName className="name">{ username }</InfoName>
            <Info className="tag">@{ tag}</Info>
            <Info className="location">{ location}</Info>
  </Description>

  <List className="stats">
    <ListItems>
      <Label color={getRandomHexColor()} className="label">Followers</Label>
                <Items className="quantity">{ stats.followers}</Items>
    </ListItems>
    <ListItems>
      <Label color={getRandomHexColor()} className="label">Views</Label>
      <Items className="quantity">{ stats.views}</Items>
    </ListItems>
    <ListItems>
      <Label color={getRandomHexColor()} className="label">Likes</Label>
      <Items className="quantity">{ stats.likes}</Items>
    </ListItems>
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