import React from 'react';
import useAuth from './useAuth';

const Home = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Witamy w FriendsZone!</h1>
      {user ? (
        <div>
          <h2>Dane użytkownika:</h2>
          <p>Imię: {user.firstName}</p>
          <p>Nazwisko: {user.lastName}</p>
          <p>Nazwa użytkownika: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Nie udało się załadować danych użytkownika.</p>
      )}
    </div>
  );
};

export default Home;