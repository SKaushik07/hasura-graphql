import React from 'react';
import CreateUserForm from '../components/CreateUserForm';
import UserList from '../components/UserList';

function HomePage() {
  return (
    <div>
      <h1>GraphQL with Hasura</h1>
      <CreateUserForm />
      <UserList />
    </div>
  );
}

export default HomePage;
