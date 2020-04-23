import React, { useState, useEffect } from 'react';
// useEffect para utilizar os metodos de ciclo de vida em componente funcional
import { connect } from 'react-redux';

import './repstyles.css'

const Repositories = (estado) => {
  const [repositories, setRepositories] = useState([]);

  useEffect(async () => {
    const response = await fetch(`https://api.github.com/users/alessandrolorenz/repos`);
    const data = await response.json();

    setRepositories(data);
  }, []); //o array vasio indica que não execute novamente, seria um load inicial

  useEffect(() => {
    // para clocar a cntagem de repositorios no titulo da pagina
    const filtered = repositories.filter(rep => rep.favorite);

    document.title = `Voce tem ${filtered.length} favoritados`
  }, [repositories])

  function handleFavorite(id) {
    const newRepositories = repositories.map(rep => {
      return rep.id === id ? { ...rep, favorite: !rep.favorite } : rep
    });
    setRepositories(newRepositories);
  }

  console.log(estado.estado.viewport.latitude);

  return (
    <>
  <div className="container">
        <table className="table-striped">
          <thead >
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col"><h5>Repositório</h5></th>
              <th scope="col"><h5>Favorito</h5></th>
              <th scope="col">Ação</th>
            </tr>
          </thead>
          <tbody>
            {repositories.map(repo => (
              <tr key={repo.id}>
                {/* <th scope="row">{repo.id}</th> */}
                <th ><h3>{repo.name}</h3></th>
                <th >{repo.favorite ? <span>Farorito</span> : <span> </span>}</th>
                <th ><button onClick={() => handleFavorite(repo.id)}>Favoritar</button></th>

              </tr>
            ))}

          </tbody>
        </table>
  </div>




    </>
  );
};

export default connect(state => ({ estado: state }))(Repositories);