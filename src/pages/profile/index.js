import React from 'react'
import './index.css'
import {Avatar} from '@chakra-ui/react';

const Profile = (props) => {
  return (

    <div className='container'>
      <div className='user-profile'>
        <div className='user-img'>
        <Avatar
                    size={'lg'}
                    src={props.user.imageUrl}
                  />
            <h5 className='user-name'><strong>User: </strong>{props.user.username}</h5>
          <h5 className='user-occupation'><strong>Ocupation: </strong>{props.user.ocupation}</h5>
          <h5 className='user-occupation'><strong>Email: </strong>{props.user.email}</h5>
        </div>
       
       
      </div>
     
    </div>
  )
} 

export default Profile