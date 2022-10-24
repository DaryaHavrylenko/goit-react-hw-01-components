import styled from 'styled-components';



const Status = styled.div`
display: block;
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${({ className}) => {
    return className ? 'green': 'red';
  }};


   margin-right: ${p => p.theme.space[3]}px;
`
const Image = styled.img`
width: 60px;
background-color: ${p => p.theme.colors.image};
  border: ${p => p.theme.borders.normal};
border-color: ${p => p.theme.colors.border};
border-radius: ${p => p.theme.radii.md};
 width: 80px;
  height: 80px;
  margin-right: ${p => p.theme.space[3]}px;
  `

const Item = styled.li`
  display: flex;
  border: ${p => p.theme.borders.normal};
border-color: ${p => p.theme.colors.border};
border-radius: ${p => p.theme.radii.md};
&:hover {box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);}
width: 300px;
height: auto;
margin-bottom: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
padding-left: ${p => p.theme.space[3]}px;
padding-top: ${p => p.theme.space[4]}px;
padding-bottom: ${p => p.theme.space[4]}px;
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
`

export const FriendListItem = ({ avatar, name, isOnline}) => {
    return <Item className="item">
        <Status className={isOnline}>
           </Status>
        <Image className= "avatar" src={avatar} alt={name} width="48" />
        <p className="name">{ name}</p>
</Item>
}