import React from 'react';

function Post() {
  return (
    <>
      <section>
        <form>
          <label>Post a Tweet</label>
          <input type="text" placeholder='Tweet at me'/>
          <button>Tweet</button>
        </form>
      </section>
    </>
  );
}

export default Post;
