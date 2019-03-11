import React from 'react';


function ChirpsFeed() {
  return (
    <section>
      <header>
        <h2> CHIRPS </h2>
      </header>
      <aside>
        <h3> <i className="fas fa-kiwi-bird"></i>Brantley </h3>
        <img src="/assets/brantley.jpg" width="10%" height="50%" alt="person1"/>
        <p> I don't know who Steve Jobs is...</p>
      </aside>
      <aside>
          <h3><i className="fas fa-kiwi-bird"></i>Khoman</h3>
          <img src="/assets/khoman.jpg" width="10%" height="50%" alt="person1" />
          <p> Mayonnaise is disgusting af, but it does wonders to my hair</p>
      </aside>
      <aside>
          <h3><i className="fas fa-kiwi-bird"></i> Samantha</h3>
          <img src="/assets/samantha.jpg" width="10%" height="50%" alt="person1" />
          <p> Kurt Cobain is that guy from Glee, right?</p>
      </aside>
      <aside>
          <h3><i className="fas fa-kiwi-bird"></i> Tyler </h3>
          <img src="/assets/tyler.jpg" width="10%" height="50%" alt="person1" />
          <p>I want my first daughter to be a girl</p>
      </aside>
    </section>
  );
}

export default ChirpsFeed;