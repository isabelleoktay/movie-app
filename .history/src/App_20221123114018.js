import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const response = await fetch('https://movie-app-diesel-backend.herokuapp.com/movie');
  
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
  }, []);

  const searchMovie = async (e) => {
    const searchValue = e.target.value.replace(/\s/g, '');
    const response = await fetch(`https://movie-app-diesel-backend.herokuapp.com/search?query=${searchValue}`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      console.log(message);
      return;
    }

    const movies = await response.json();
    setMovies(movies);
  };

  return (
    <div className='App dark:bg-emerald-300'>

      <input className="mb-4 border-2 border-slate-800 focus:outline-none focus:ring-0" type='text' placeholder='search for movies :D' onChange={searchMovie}/>

      <div className="overflow-x-auto relative">
        <table className="table-auto w-screen text-sm text-left text-gray-200 dark:text-gray-100">
            <thead className="text-xs dark:text-slate-600 uppercase bg-gray-50 dark:bg-emerald-300 dark:text-emerald-800">
                <tr>
                    <th scope="col" className="w-1/12 py-3 px-6">
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
                    <th scope="col" className="w-1/12 py-3 px-6">
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
                      <span key={key}>{ (key ? ', ' : '') + t }</span>
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
