
import { useFetch } from './hook/useFetch';

type Repository = {
  full_name: string;
  description: string;
}

function App() {
  const {data: repositiries, isFetching} = 
  useFetch<Repository>('/users/cesarionas/repos')

  return (
    <ul>
      { isFetching && <p>Carregando...</p> }
      {repositiries?.map(repo => {
        return(
          <li key={repo.full_name}>
          <strong>{repo.full_name}</strong>
          <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default App
