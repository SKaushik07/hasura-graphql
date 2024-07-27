import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations/userMutations";

function CreateUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUser({ variables: { id: 1, name, email } });
      console.log("User created:", response.data);
      setName("");
      setEmail("");
    } catch (err) {
      console.error("Error creating user:", err);
      if (err.graphQLErrors) {
        err.graphQLErrors.forEach(({ message }) => {
          console.error("GraphQL Error:", message);
        });
      }
      if (err.networkError) {
        console.error("Network Error:", err.networkError);
      }
    }
  };

  if (loading) return <p>Submitting...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Create User</button>
      </form>
      {data && (
        <div>
          <h3>User Created</h3>
          <p>Name: {data.insert_users_one.name}</p>
          <p>Email: {data.insert_users_one.email}</p>
        </div>
      )}
    </div>
  );
}

export default CreateUserForm;
