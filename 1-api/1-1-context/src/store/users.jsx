import React, { createContext } from 'react';

// Creating Context
// pass this Context to its child components.
// value ---> pass user information

export const UserContext = createContext();

const UserStore = (props) => {
  const users = {
    name: 'jihye',
    job: 'engineer',
  };
  return (
    <UserContext.Provider value={users}>{props.children}</UserContext.Provider>
  );
};

export default UserStore;
