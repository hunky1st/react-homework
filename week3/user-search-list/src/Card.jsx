import React from 'react'

function Card({ user }) {
  return (
    <li className="card">
      <strong>{user.name}</strong>
      <p>{user.job}</p>
    </li>
  )
}

export default Card
