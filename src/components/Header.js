import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Search from './Search';
import Home from './Home';
import 'normalize.css';
import styles from './css/Header.css';

function Header() {
  return (
    <Router>
      <div className={styles.header}>
        <h1>Tweeter</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default Header;

// import React from 'react';
// import 'normalize.css';
// import styles from './css/Header.css';
// import { Link } from 'react-router-dom';

// function Header() {
//   return (
//     <header className={styles.header}>
//       <h1>Tweeter</h1>
      
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/search">Search</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;
