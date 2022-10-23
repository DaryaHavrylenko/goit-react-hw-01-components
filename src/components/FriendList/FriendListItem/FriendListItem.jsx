import styled from 'styled-components';



const Status = styled.div`
display: block;
width: 40px;
heigth: 40px;
border-radius: 50%;
background-color: green;
&:offline {
 background-color: red;   
}
`
const Image = styled.img`
width: 40px;
border-radius: 50%;
 max-width: 100%;
  height: auto;`


export const FriendListItem = ({ avatar, name, isOnline }) => {
    return <li className="item">
        <Status className={isOnline = true}>
           
  </Status>
        <Image className= "avatar" src={avatar} alt={name} width="48" />
        <p className="name">{ name}</p>
</li>
}