import React from 'react';
import styles from './Home.css';


function Home() {
  return (
    <main className={styles.Home}>
      <header>
        <nav>
          <ul>
            <p><li><a href="/Home">HOME </a></li></p>
            <p><li><a href="/SignOut">SIGN OUT</a></li></p>
          </ul>
        </nav>
      </header>
        
      <section>
        <p></p>
      </section>
      <div className="fashion">
        <h2>Fashion Bird News</h2>
        {/* <img src="https://i.pinimg.com/originals/c2/64/77/c264774547a8875f5bfab4a9fb152829.jpg"/> */}
        <ul>
          <li>News 1</li>
          <li>News 2</li>
          <li>News 3</li>
        </ul>
      </div>

      <div className="funny">
        <h2>Funny Bird News</h2>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3yyfU9hxFefll8j0yPwwn0XVO7fACxxpBVUeEJOFGo9qiMb-"/> */}
        <ul>
          <li>News 1</li>
          <li>News 2</li>
          <li>News 3</li>
        </ul>
      </div>

      <div className="artsy">
        <h2>Artsy Bird News</h2>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXnWkraVt_TTeY7Z3h9oMlqa6fdws6kuu-2ysXXDo_YY2Pw38x"/> */}
        <ul>
          <li>News 1</li>
          <li>News 2</li>
          <li>News 3</li>
        </ul>
      </div>
      <footer><p>©Copyright. All rights reserved</p></footer>
    </main>
  );
}
export default Home;
