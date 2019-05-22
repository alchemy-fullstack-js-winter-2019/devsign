import React from 'react';
import styles from './Trending.css';
import Header from '../header/header';

function TrendingList() {
  return (
    <>
    <main className={styles.Trending}>
      <Header />
      <h1>Trending now:</h1>
      <h2>Tweet 1</h2>
      <img src="http://i.pravatar.cc/1000" />
      <p>loremipsumloremipsumloremipsumloremipsum</p>
      <h2>Tweet 2</h2>
      <img src="http://i.pravatar.cc/1000" />
      <p>loremipsumloremipsumloremipsumloremipsum</p>
      <h2>Tweet 3</h2>
      <img src="http://i.pravatar.cc/1000" />
      <p>loremipsumloremipsumloremipsumloremipsum</p>
      <h2>Tweet 4</h2>
      <img src="http://i.pravatar.cc/1000" />
      <p>loremipsumloremipsumloremipsumloremipsum</p>
      <h2>Tweet 5</h2>
      <img src="http://i.pravatar.cc/1000" />
      <p>loremipsumloremipsumloremipsumloremipsum</p>
      <h2>Tweet 6</h2>
      <img src="http://i.pravatar.cc/1000" />
      <p>loremipsumloremipsumloremipsumloremipsum</p>
      <h2>Tweet 7 </h2>
      <img src="http://i.pravatar.cc/1000" />
      <p>loremipsumloremipsumloremipsumloremipsum</p>
    </main>
    </>
  );
}
export default TrendingList;


