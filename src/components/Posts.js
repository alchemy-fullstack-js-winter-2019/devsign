import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Posts() {
  return (
    <>
     <Header/>
    <section>
      <h1>List of Posts</h1>
      <ul>
        <li>Post#1 Title</li>
        <li>Post#2 Title</li>
        <li>Post#2 Title</li>
      </ul>
    </section>
    <Footer/>
    </>
  );
}
