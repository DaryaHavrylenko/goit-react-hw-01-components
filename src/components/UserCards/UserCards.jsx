import PropTypes from 'prop-types';


export const UserCards = ({ user}) => {
    return ( <div className="profile">
  <div className="description">
    <img
      src={user.avatar}
      alt="User avatar"
      className="avatar"
    />
            <p className="name">{ user.username }</p>
            <p className="tag">@{ user.tag}</p>
            <p className="location">{ user.location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
                <span className="quantity">{ user.stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{ user.stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{ user.stats.likes}</span>
    </li>
  </ul>
</div>)
}

UserCards.propTypes = {
   user: PropTypes.exact({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
       stats: PropTypes.shape({ followers: PropTypes.number,
            views: PropTypes.number,
           likes: PropTypes.number,}
          
       )
         })
   }