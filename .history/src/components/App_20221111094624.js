import logo from './logo.svg';
import './App.css';
import Table from './Table';

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
        Header: "Links",
        accessor: "links" // accessor is the "key" in the data
      },
      {
        Header: "Average Rating",
        accessor: "rating"
      },
      {
        Header: "Tags",
        accessor: "tags"
      }
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        id: "1",
        title: "Toy Story (1995)",
        genres: "Adventure|Animation|Children|Comedy|Fantasy",
        links: {IMBD: "imbd.com", TMBD: "themoviedb.com"},
        rating: 4,
        tags: []
      },
      {
        id: "2",
        title: "Jumanji (1995)",
        genres: "Adventure|Children|Fantasy",
        links: {IMBD: "imbd.com", TMBD: "themoviedb.com"},
        rating: 4,
        tags: ["funny", "Highly quotable", "will ferrell", "Boxing story"]
      },
    ],
    []
  );

  return (
    <Table columns={columns} data={data}/>
  );
}

export default App;
