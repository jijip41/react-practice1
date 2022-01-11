import React, { useContext } from '../store/users';
import { UserContext } from '../store/users';

export default function About() {
  const context = useContext(UserContext);
  return (
    <div>
      <h1>My Profile</h1>
      <p>{context.name}</p>
      <p>{context.job}</p>
    </div>
  );
}
