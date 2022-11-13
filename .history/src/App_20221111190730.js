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

      <div class="overflow-x-auto relative">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Movie Id
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Title
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Genres
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Links
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Average Rating
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Tags
                    </th>
                </tr>
            </thead>
            <tbody>
            {movies.filter((val) => {
              if (searchTerm == "") {
                return val
              } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
              }
            }).map((val, key) => {
              return (
                <tr className="user bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={key}>
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {val.movieId}
                  </th>
                  <td className="py-4 px-6">{val.title}</td>
                  <td className="py-4 px-6">{val.genres}</td>
                  <td className="py-4 px-6">{val.links}</td>
                  <td className="py-4 px-6">{val.rating}</td>
                  <td className="py-4 px-6">{val.tag}</td>
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
