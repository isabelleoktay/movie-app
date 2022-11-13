import React from 'react'
import '../App.css';
import BasicTable from './BasicTable';
import Search from './Search';

function App() {

  const columns = React.useMemo(
    () => [
      {
        Header: "Movie ID",
        accessor: "id" // accessor is the "key" in the data
      },
      {
        Header: "Title",
        accessor: "title"
      },
      {
        Header: "Genres",
        accessor: "genres"
      },
      {
        Header: "Average Rating",
        accessor: "rating"
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        id: "1",
        title: "Toy Story (1995)",
        genres: "Adventure|Animation|Children|Comedy|Fantasy",
        rating: 4,
      },
      {
        id: "2",
        title: "Jumanji (1995)",
        genres: "Adventure|Children|Fantasy",
        rating: 4,
      },
    ],
    []
  );

  return (
    <>
    <Search/>
    <BasicTable columns={columns} data={data}/>
    </>
  );
}

export default App;
