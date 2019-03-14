import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function AddPost() {
  return (
    <>
    <Header/>
      <section>
        <h3>Add New Post</h3>
        <form>
          <label htmlFor="title">Post Title</label>
          <input type="text" name="title" id="title" size="30" placeholder="post title" required/>
          <label htmlFor="post">Enter new post here</label>
          <textarea  name="post" id="post" rows="10" cols="40">Another awesome content here...</textarea> 
          <button>Add</button>
        </form>
      </section>
      <Footer/>
    </>  
  );
}

