import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <Header/>
      <section>
        <h1>Latest Posts</h1>
        <ul>
          <li>Post#1 Superfoods</li>
          <li>Post#2 LeafyGreens</li>
          <li>Post#3 Herbs & Spices</li>
        </ul>
      </section>
      <Footer/>
    </>  
  );
}
