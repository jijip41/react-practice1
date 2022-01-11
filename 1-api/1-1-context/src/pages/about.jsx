// bring user data using Context

import React, { useContext } from '../store/users';
import { UserContext } from '../store/users';

// when making Context ---> createContext
// when calling Context ---> useContext

export default function About() {
  const context = useContext(UserContext);
  return (
    <div>
      <h1>About me</h1>
      <p>{context.name}</p>
    </div>
  );
}
