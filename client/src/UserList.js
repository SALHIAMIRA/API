import React from 'react'
import "./userlist.css"

const UserList = ({user}) => {
  return (
    <div>
      <div id="login-container">
  <div className="profile-img" />
  <h1>{user.name}</h1>
  <h2>{user.username}</h2>
  <div className="description">
   
  </div>
  </div>
  
</div>

  
  )
}

export default UserList
