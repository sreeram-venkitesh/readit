import React, { useState } from 'react';
import '../css/App.css';

function App() {
  const [subreddit,setSubreddit] = useState('all')

  // const select = document.getElementById('optionSelect').value
  // console.log(select)


  return (
    <div className="App">
      <h1>readit</h1>
      <p className='para'>
      readit is a simple app written in React to help you read good posts from reddit.
      You can select any other subreddit you want
      to read from here.
      </p>
      
    </div>
  );
}

export default App;
