import React from 'react';
import axios from 'axios';
//import movies from './movies.json';
import './App.css';
import {useState, useEffect} from 'react';
//import styles from "./index.css";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const data = JSON.stringify({
    "collection": "movies",
    "database": "movie",
    "dataSource": "movies",
    "projection": {"_id": 1, "movieId": 1, "title": 1, "genres": 1, "rating": 1, "tag": 1, "links": 1}
  });
  
  const config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-xinwh/endpoint/data/v1/action/find',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'IHvYENoEMJhndrE8eW7JRNp6Qti9IbQXPawyOVv0wWRKZSbuid1ZHJVkPKo8vsBG',
    },
    data: data
  };

  axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });


  useEffect(() => {
    async function getMovies() {
      const response = await fetch(config);
      response.header("Access-Control-Allow-Origin", "*");
      response.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
      response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  
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
            <thead class="text-xs dark:text-slate-600 uppercase bg-gray-50 dark:bg-emerald-300 dark:text-emerald-800">
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
