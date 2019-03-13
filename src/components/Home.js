import React from 'react';
import styles from './Home.css';


function Home() {
  return (
    <main className={styles.Home}>
      <header>
        <nav>
          <ul>
            <p><li><a href="/Home">HOME </a></li></p>
            <p><li><a href="/LogIn">LOG IN</a></li></p>
            <p><li><a href="/Register">REGISTER</a></li></p>
          </ul>
        </nav>
      </header>
        
      <section>
        <h2>Top Fashion Bird Photo</h2>
        <summary>Fashion Bird</summary>
        <img src="https://i.pinimg.com/originals/c2/64/77/c264774547a8875f5bfab4a9fb152829.jpg"/>
      </section>

      <section>
        <h2>Top Funny Bird Photo</h2>
        <summary>Funny Bird</summary>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3yyfU9hxFefll8j0yPwwn0XVO7fACxxpBVUeEJOFGo9qiMb-"/>
      </section>

      <section>
        <h2>Artsy Bird Photo</h2>
        <summary>Artsy Bird</summary>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXnWkraVt_TTeY7Z3h9oMlqa6fdws6kuu-2ysXXDo_YY2Pw38x"/>
      </section>
      <footer><p>©Copyright. All rights reserved</p></footer>
    </main>
  );
}
export default Home;
