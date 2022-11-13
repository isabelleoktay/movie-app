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

      <table class="table-fixed">
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
      <tbody>
      {movies.filter((val) => {
        if (searchTerm == "") {
          return val
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (
          <tr className="user" key={key}>
            <td>{val.movieId}</td>
            <td>{val.title}</td>
            <td>{val.genres}</td>
            <td>{val.links}</td>
            <td>{val.rating}</td>
            <td>{val.tag}</td>
          </tr>
        )
      })}
      </tbody>
    </div>
  );
}

export default App;
