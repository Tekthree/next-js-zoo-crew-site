import React from 'react'

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return (
    <div>UsersPage</div>
  )
}

export default UsersPage;