import React from 'react';
import movies from './movies.json';
import './App.css';
import {useState} from 'react';
import styles from "./index.css"

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='App'>
      <input type='text' placeholder='Search...' onChange={event => setSearchTerm(event.target.value)}/>

      <table class="table-auto">
        <thead>
          <tr>
            <th>Movie ID</th>
            <th>Title</th>
            <th>Genres</th>
            <th>Links</th>
            <th>Average Rating</th>
            <th>Tags</th>
          </tr>
        </thead>
      </table>
      {movies.filter((val) => {
        if (searchTerm == "") {
          return val
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p className='text-blue-500'>{val.movieId}{val.title}{val.genres}{val.rating}{val.links}{val.tag}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
