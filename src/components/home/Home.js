import React from 'react';
import PopularChirps from '../../container/PopularChirps';
import { login } from '../../services/auth';


export default function Home() {
  login();
  return (
    <main>
      <PopularChirps />
    </main>
  );
}
