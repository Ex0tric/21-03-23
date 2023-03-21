import React, {useContext, useEffect} from 'react'
import AuthContext from '../Context/AuthContext'

function Partner() {

  let { logoutUser, user, userType, updateToken} = useContext(AuthContext)

  useEffect(()=>{
    updateToken()
  },[])

    return (
      <>
        {
          userType === 'is_partner' ? 
          <div className='main'>
            <h1 className='text-center'>Welcome, {user.slice(0,1).toUpperCase() + user.slice(1)} </h1>
            <button onClick={logoutUser}>Logout</button>
          </div>
          : 
          <h1>You Don't Have Access of Partner</h1>
        }
      </>
    )

}

export default Partner;
