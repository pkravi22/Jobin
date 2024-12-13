import React from 'react'
import Navbar from '../componets/navbar/Navbar'
import PostsStatus from '../componets/postsStatus/PostsStatus'

const Home = ({user}) => {

  return (
    <div className='py-8'>
      <PostsStatus user={user}/>
       </div>
  )
}

export default Home