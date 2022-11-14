import React from 'react';
//import movies from './movies.json';
import './App.css';
import {useState, useEffect} from 'react';
//import styles from "./index.css";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const response = await fetch(`http://localhost:5000/movie/`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const movies = await response.json();
      setMovies(movies);
    }
  
    getMovies();
  
    return;
  }, [movies.length]);

  return (
    <div className='App dark:bg-emerald-300'>
      <input className="mb-4 border-2 border-slate-800 focus:outline-none focus:ring-0" type='text' placeholder='search for movies :D' onChange={event => setSearchTerm(event.target.value)}/>

      <div class="overflow-x-auto relative">
        <table class="table-fixed w-full text-sm text-left text-gray-200 dark:text-gray-100">
            <thead class="text-xs dark:text-gray-800 uppercase bg-gray-50 dark:bg-emerald-300 dark:text-emerald-200">
                <tr>
                    <th scope="col" className="py-3 px-6">
                        Movie Id
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Title
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Genres
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Links
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Average Rating
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Tags
                    </th>
                </tr>
            </thead>
            <tbody>
            {movies.filter((val) => {
              if (searchTerm === "") {
                return val
              } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
              }
            }).map((val, key) => {
              return (
                <tr className="user bg-white border-b dark:bg-emerald-800 dark:border-emerald-700" key={key}>
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {val.movieId}
                  </th>
                  <td className="py-4 px-6">{val.title}</td>
                  <td className="py-4 px-6">{val.genres}</td>
                  <td className="py-4 px-6">{val.links.map((link, key) => {
                    return (
                      <p key={key}>{link}</p>
                    )
                  })}</td>
                  <td className="py-4 px-6">{val.rating}</td>
                  <td className="py-4 px-6">{val.tag.map((t, key) => {
                    return (
                      <p key={key}>{t}</p>
                    )
                  })}</td>
                </tr>
              )
            })}
                
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
