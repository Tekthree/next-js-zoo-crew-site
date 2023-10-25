import { link } from 'fs';
import React from 'react';

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
    <>
      <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
        Loser Users
      </h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} </li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
