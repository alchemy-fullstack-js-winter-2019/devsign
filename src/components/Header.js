import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/toptweets">Top Tweets</Link>
        <Link to="/register">SignUp/In</Link>
        <Link to="/"><img alt={'user profile picture'} src="https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060" /></Link>
      </nav>
    </header>
  );
}
