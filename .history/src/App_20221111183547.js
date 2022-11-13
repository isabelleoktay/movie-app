import React from 'react';
import movies from '../movies.json';
import './App.css';
import {useState} from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='App'>
      <input type='text' placeholder='Search...'/>
      {movies.filter((val) => {
        if (searchTerm == "") {
          return val
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.movieId}{val.title}{val.genres}{val.rating}{val.links}{val.tag}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
