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


      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="border-b">
                  <tr>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Movie ID
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Title
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Genres
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Links
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Average Rating
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
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
                    <tr className="border-b" key={key}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{val.movieId}</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {val.title}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {val.genres}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {val.links}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {val.rating}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {val.tag}
                      </td>
                    </tr>
                  )
                })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
