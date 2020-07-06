import React from 'react'
import Post from './Post/Post'

const posts = (props) => props.posts.map(f => {
  return (
    <Post
      key={f.name}
      post={f.name}
    />
  )
})

export default posts