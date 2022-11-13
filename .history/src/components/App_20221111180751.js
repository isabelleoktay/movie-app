import movies from './movies.json';
import '../App.css';
import BasicTable from './BasicTable';
import Search from './Search';

function App() {

  return (
    <>
    <BasicTable columns={columns} data={data}/>
    </>
  );
}

export default App;
