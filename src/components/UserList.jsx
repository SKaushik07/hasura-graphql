import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../graphql/queries/userQueries';

function UserList() {
  const { loading, error, data } = useQuery(GET_USERS);
  console.log("data",data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data?.users?.map(user => (
          <li key={user?.id}>
            <strong>Name:</strong> {user?.name} <br />
            <strong>Email:</strong> {user?.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
