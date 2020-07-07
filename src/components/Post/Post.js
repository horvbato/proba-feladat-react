import React from 'react'
import './Post.css'

const post = (props) => {

  const h1 = props.post.filter(f => f.type === 'h1')
  const h2 = props.post.filter(f => f.type === 'h2')
  const h3 = props.post.filter(f => f.type === 'h3')
  const h4 = props.post.filter(f => f.type === 'h4')

  console.log(h2)

  return (
    <div className="post-container">
      {h1.map(f => {
        return (
          <h1>{f.content}</h1>
        )
      })}
      {h2.map(f => {
        return (
          <h2>{f.content}</h2>
        )
      })}
      {h3.map(f => {
        return (
          <h3>{f.content}</h3>
        )
      })}
      {h4.map(f => {
        return (
          <h4>{f.content}</h4>
        )
      })}
    </div>
  )
}

export default post